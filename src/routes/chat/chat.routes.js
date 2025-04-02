const { Router } = require('express');
const router = Router();

//Controllers
const {
    getChatList,
    newChat
} = require('../../controllers/chat/chat.controller')


//Get the entire list of chats of a user
router.get('/:uid',  getChatList);

//Create a new chat
router.post('/new-chat', newChat);


module.exports = router;