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
        const newPost = await Post.create({ user: userExist._id, content, images, videos })

        return res.status(201).json({
            ok: true,
            msg: "Post creado correctamente",
            post: newPost
        })

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            ok: false,
            msg: "Error interno del servidor"
        });
    }


}

const getOnePost = async (req, res) => {
    try {
        const { postId } = req.params;

        const postInfo = await Post.findById(postId).populate("user");

        if (!postInfo) {
            return res.status(404).json({
                ok: false,
                error: 'Post no encontrado'
            });
        };

        return res.status(200).json({
            ok: true,
            postInfo
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            error: 'Error de servidor'
        });
    };
}

const getFriendsPost = async (req, res) => {

    try {
        const { uidList } = req.body;

        if (!uidList || uidList < 1) {
            console.error('Faltan usuarios');
            return res.status(404).json({
                ok: false,
                msj: 'No hay consultas por realizar'
            })
        }

        const postsList = await Post.find({ user: { $in: uidList } }).populate('user', 'username img _id');

        return res.status(200).json({
            ok: true,
            posts: postsList
        })

    } catch (error) {
        console.error('No se pudieron obtener los posts');
        return res.status(500).json({
            ok: false,
            msj: 'Problemas en el servidor'
        })
    }

}

const getUserPosts = async (req, res) => {
    try {

        const { userIdOwner, userIdQuery } = req.body;

        const userPosts = await Post.find({ user: userIdQuery }).populate("user");

        if (!userPosts || userPosts.length === 0) {
            return res.status(404).json({
                ok: false,
                error: 'Posts no encontrados'
            });
        };

        return res.status(200).json({
            ok: true,
            userPosts
        })

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            ok: false,
            error: 'Error del servidor'
        });
    }
};

module.exports = {
    createPost,
    getOnePost,
    getUserPosts,
    getFriendsPost
}