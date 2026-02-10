const mongoose = require('mongoose');
const { User } = require('../../models/user.model');


//Add a new followed
const followUser = async (req, res) => {

    const { currentUserId, targetUserId } = req.body;

    if (!currentUserId || !targetUserId) {
        return res.status(400).json({
            ok: false,
            msg: 'Faltan IDs requeridos'
        });
    }

    if (currentUserId === targetUserId) {
        return res.status(400).json({
            ok: false,
            msg: 'No puedes seguirte a ti mismo'
        });
    }

    try {
        
        await User.updateOne(
            {_id: currentUserId},
            { $addToSet: {followed: targetUserId}},
        )
        await User.updateOne(
            {_id: targetUserId},
            { $addToSet: {followers: currentUserId}},
        )

        res.status(200).json({
            ok: true,
            msg: 'Usuario seguido correctamente'
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error al seguir al usuario'
        });
    }
    
};

const unfollowUser = async (req, res) => {

    const { currentUserId, targetUserId } = req.body;

    if (!currentUserId || !targetUserId) {
        return res.status(400).json({
            ok: false,
            msg: 'Faltan IDs requeridos'
        });
    }

    try {
        
        await User.updateOne(
            {_id: currentUserId},
            { $pull: {followed: targetUserId}},
        )
        await User.updateOne(
            {_id: targetUserId},
            { $pull: {followers: currentUserId}},
        )

        res.status(200).json({
            ok: true,
            msg: 'Se ha dejado de seguir correctamente'
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error al dejar de seguir al usuario'
        });
    }
    
};

const getFollowers = async (req, res) => {

    const { userId } = req.params;

    if (!userId) {
        res.status(400).json({
            ok: false,
            msg: "Es necesario un id"
        })
    }

    try {

        const followersList = await User.fin
        
    } catch (error) {
        
    }


};

const getFollowing = async (req, res) => {

};

module.exports = {
    followUser,
    unfollowUser,
    getFollowers,
    getFollowing
}