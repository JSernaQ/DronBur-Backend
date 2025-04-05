const { Router } = require('express');
const router = Router();

//Controllers
const {
    getChatList,
    newChat,
    getChat
} = require('../../controllers/chat/chat.controller')


//Get the information of a individual chat
router.get('/:chatId',  getChat);

//Get the entire list of chats of a user
router.get('/:uid',  getChatList);

//Create a new chat
router.post('/new-chat', newChat);


module.exports = router;