const { findUserByUidFB } = require('../../utils/userUtilities')
const { Post } = require('../../models/post/post.model');
const { User } = require('../../models/user.model');

const createPost = async (req, res) => {

    try {
        
        const { uid, content, images, videos } = req.body;

        //Verify if user exist
        const userExist = await findUserByUidFB(uid);
        
        if (!userExist) {
            return res.status(400).json({
                ok: false,
                msg: "El usuario no existe"
            });
        }
        
        //Create new post with the information of body
        const newPost = await Post.create({user: userExist._id, content, images, videos})

        return res.status(201).json({
            ok: true,
            msg: "Post creado correctamente",
            post: newPost
        })

    } catch (error) {
        console.error(error.message);
        return res.status(400).json({
            ok: false,
            msg: "Error al crear el post",
            error: error
        })        
    }

}

const getOnePost = async (req, res) => {
    return true
}

const getUserPosts = async (req, res) => {
    return true
}

module.exports = {
    createPost,
    getOnePost,
    getUserPosts,
}