const mongoose = require('mongoose');
const { User } = require('../models/user.model');

const getUserById = async (req, res) => {

    try {

        const uid = req.params.uid;

        const userInfo = await User.findOne({uidFB: uid});

        return res.status(200).json({
            http: 200,
            ok: true,
            userInfo
        })

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
            img: photoURL || ""
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
