const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')
const postController = require('../controllers/posts')




// USER routes
router.get('/', userController.getTest);
router.get('/profile', userController.getProfile);


// POSTS ROUTES
router.get("/posts/:roomId", postController.getPosts);
router.post("/post", postController.createPost);



module.exports = router; 