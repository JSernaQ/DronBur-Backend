const { Message } = require('../models/chat/message.model');

module.exports = function setUpChatSockets(io) {
    io.on('connection', (socket) => {

        //User connection
        console.log(`Usuario conectado: ${socket.id}`);

        //Join a chat
        socket.on('joinChat', (chatId) => {
            socket.join(chatId);
            console.log(`Usuario se unió al chat: ${chatId}`);
        });

        //Send message
        socket.on('sendMessage', async (data) => {
            const { chatId, sender, content, type } = data;

            try {
                const newMessage = new Message({ chatId, sender, content, messageType:type });
                await newMessage.save();

                io.to(chatId).emit('newMessage', newMessage);
                console.log(`Mensaje enviado en el chat ${chatId}`);
            } catch (error) {
                console.error('Error al guardar el mensaje:', error);
            }
        });

        // User disconneted
        socket.on('disconnect', () => {
            console.log(`Usuario desconectado: ${socket.id}`);
        });

    })
}