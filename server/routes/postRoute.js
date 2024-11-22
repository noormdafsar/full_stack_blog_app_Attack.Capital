const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, getPostsByAuthor } = require('../controllers/postController');
const { isAuthenticatedUser } = require('../middlewares/auth');


router.route('/post').post(isAuthenticatedUser, createPost);
router.route('/posts').get(getAllPosts);

// Get posts by a specific author
router.route('/posts').get(getPostsByAuthor);

module.exports = router;
