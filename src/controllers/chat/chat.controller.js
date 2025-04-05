const { Chat } = require('../../models/chat/chat.model');

const getChatList = async (req, res) => {
    
    try {
        
        const uid = req.params.uid;
        const chats = await Chat.find({participants: uid}).populate('participants');

        res.status(200).json({
            chats
        })

    } catch (error) {
        
        console.error('Error al obtener los chats:', error);
        res.status(500).json({
            msg: 'Error al obtener los chats:',
            error
        })
    }
};

const getChat = async(req, res) => {

    try {
        const chatId = req.params.chatId;

        const infoChat = await Chat.findById(chatId);

        res.status(200).json({
            infoChat
        });

    } catch (error) {
        console.log('Error al obtener chat', error);
        res.status(500).json({
            msg: `Error al obtener chat: ${error}`
        });
    }
}

const newChat = async (req, res) => {

    try {
        
        const {participants, isGroup, groupName} = req.body;

        const newChat = await Chat.create({participants, isGroup, groupName});

        res.status(201).json({
            newChat
        });

    } catch (error) {
        console.log('Error al crear nuevo chat', error);
        res.status(500).json({
            msg: `Error al crear nuevo chat: ${error}`
        });
    }

};

module.exports = {
    getChatList,
    newChat,
    getChat
}