const { Router } = require('express');
const router = Router();

//Controllers
const {
    getMessageList,
    // sendMessage
} = require('../../controllers/chat/message.controller')

//Get the entire messages list from a chat
router.get('/:chatId', getMessageList);

//Send a new message to a chat
// router.post('/send', sendMessage); Disable by used of sockets for real time

module.exports = router;