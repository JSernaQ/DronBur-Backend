const { Router } = require('express');
const router = Router();

const {
    createPost,
    getOnePost,
    getUserPosts,
    getFriendsPost
} = require('../../controllers/post/post.controller')

router.post('/create', createPost)
router.get('/get-one-post/:postId', getOnePost)
router.post('/get-posts-by-user/:userId', getUserPosts)
router.post('/get-friends-posts', getFriendsPost)

module.exports = router;