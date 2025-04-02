const { Chat } = require('../../models/chat/chat.model');
const { Message } = require('../../models/chat/message.model');

const getMessageList = async (req, res) => {
    
    try {

        const chatId = req.params.chatId;
        const messages = await Message.find({chatId}).populate('sender')

        res.status(200).json({
            messages
        });

    } catch (error) {
        console.log('Error al obtener los mensajes');
        res.status(500).json({ 
            error: 'Error al obtener los mensajes' 
        });
    }

};

// const sendMessage = async (req, res) => {
    
//     try {
        
//         const { chatId, sender, content, messageType} = req.body;

//         const newMessage = await Message.create({chatId, sender, content, messageType});

//         res.status(200).json({
//             newMessage
//         })

//     } catch (error) {
//         console.log('Error al enviar mensaje');
//         res.status(500).json({ 
//             error: 'Error al enviar el mensaje' 
//         });
//     }
// };

module.exports = {
    getMessageList,
    // sendMessage
}