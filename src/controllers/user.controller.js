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

    try {

        const { email, uid, accessToken, photoURL, username } = req.body;

        //Validate data
        if (!email || !uid) {
            return res.status(400).json({ 
                http: 400, 
                ok: false, 
                error: "Faltan campos obligatorios (email o uid)" 
            });
        }   

        //Create user
        const newUser = await User.create({ 
            uidFB: uid, 
            email, 
            username: username || email.split('@')[0], 
            img: photoURL 
        });


        return res.status(201).json({
            ok: true,
            user: `Usuario creado correctamente`
        });


    } catch (error) {
        console.error("Error al crear usuario:", error.message);
        return res.status(500).json({
            ok: false,
            error: "Error interno del servidor"
        });
    }

}


module.exports = {
    getUserById,
    createUser
}
