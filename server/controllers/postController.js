const Post = require('../models/postModel');
const ErrorHandler = require('../utils/errorHandler');

// Create a new post
exports.createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    // Validation
    if (!title || !content) {
      return next(new ErrorHandler('Title and content are required', 400));
    }

    const post = await Post.create({
      title,
      content,
      authorId: req.user._id // Set author from authenticated user
    });
    console.log('user created post', post);
    res.status(201).json({
      success: true,
      post
    });
  } catch (error) {
    next(error);
  }
};

// Get all posts
exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().populate('authorId', 'name email');
    console.log('All posts', posts);
    res.status(200).json({
      success: true,
      posts
    });
  } catch (error) {
    next(error);
  }
};

// Get posts by a specific author
exports.getPostsByAuthor = async (req, res, next) => {
  try {
    const { author } = req.query;

    if (!author) {
      return next(new ErrorHandler('Author ID is required', 400));
    }

    const posts = await Post.find({ authorId: author }).populate('authorId', 'name email');
    console.log('Posts by author', posts);
    if (!posts.length) {
      return next(new ErrorHandler('No posts found for this author', 404));
    }

    res.status(200).json({
      success: true,
      posts
    });
  } catch (error) {
    next(error);
  }
};
