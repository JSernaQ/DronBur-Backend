const express = require('express');
const router = express.Router();

const {
    createUser,
    getUserById
} = require('../controllers/user.controller')

router.post('/createUser', createUser)
router.get('/:uid', getUserById)

module.exports = router