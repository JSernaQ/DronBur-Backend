const { Router } = require('express');
const router = Router();

const {
    createPost,
    getOnePost,
    getUserPosts
} = require('../../controllers/post/post.controller')

router.post('/create', createPost)
router.get('/get-one-post/:postId', getOnePost)
router.get('/get-posts-by-user/:uid', getUserPosts)

module.exports = router;