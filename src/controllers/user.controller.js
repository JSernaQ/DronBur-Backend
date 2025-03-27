const mongoose = require('mongoose');
const { User } = require('../models/user.model');
const admin = require('../config/firebase')

const getUserById = async (req, res) => {

    try {
        
        const username = req.params.id;

        return res.status(200).json({
            http: 200,
            ok: true,
            user: `Hola, ${username}`
        })

        // const user = await User.findOne({ username: username });  

        // if (user) {
        //     return res.status(200).json({
        //         http: 200,
        //         ok: true,
        //         user: user
        //     })
        // }

    } catch (error) {

        console.log('Error: ', error);

    }

};

const createUser = async (req, res) => {

    return res.status(200).json({
        http: 200,
        ok: true,
        user: user
    })

}


module.exports = {
    getUserById,
    createUser
}
