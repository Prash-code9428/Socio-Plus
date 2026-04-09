const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

// 1. LIKE / UNLIKE ROUTE
router.post('/:id/like', async (req, res) => {
  try {
    // Requires the authenticated user's ID to be passed in the body
    const { userId } = req.body; 
    
    if (!userId) return res.status(400).json({ message: 'User ID is required' });

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    // Check if the user already liked the post
    if (!post.likes.includes(userId)) {
      post.likes.push(userId); // Add like
      await post.save();
      return res.status(200).json({ message: 'Post liked', likesCount: post.likes.length, post });
    } else {
      post.likes = post.likes.filter((id) => id.toString() !== userId); // Remove like
      await post.save();
      return res.status(200).json({ message: 'Post unliked', likesCount: post.likes.length, post });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error processing like', error: error.message });
  }
});

// 2. ADD COMMENT ROUTE
router.post('/:id/comment', async (req, res) => {
  try {
    const { userId, text } = req.body;
    
    if (!userId || !text) return res.status(400).json({ message: 'User ID and comment text are required' });

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    // Construct the new comment subdocument
    const newComment = { 
      userId, 
      text, 
      createdAt: new Date() 
    };

    post.comments.push(newComment);
    await post.save();

    // 3. MENTIONS LOGIC PARSER
    // Scans the incoming comment text for "@username"
    const mentions = text.match(/@\w+/g);
    if (mentions) {
        // Ex: ["@jane", "@alex"]
        // In a fully scaled app, you map these mentions to database Users, 
        // and spawn Notification objects for them here!
        console.log(`Mentions detected in comment on post ${post._id}:`, mentions);
    }

    res.status(201).json({ message: 'Comment added successfully', comments: post.comments });
  } catch (error) {
    res.status(500).json({ message: 'Error saving comment', error: error.message });
  }
});

module.exports = router;
