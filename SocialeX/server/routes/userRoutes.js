const express = require('express');
const router = express.Router();
const User = require('../models/User');

// USER SEARCH API (For frontend Mentions and Autocomplete)
router.get('/search', async (req, res) => {
  try {
    const searchQuery = req.query.q;
    if (!searchQuery) return res.status(200).json([]);
    
    // Find users whose username matches the query (case-insensitive regex)
    const users = await User.find({ 
      username: { $regex: `^${searchQuery}`, $options: 'i' } 
    }).select('username profilePic _id').limit(5); // Return top 5 matches for autocomplete

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error searching for users', error: error.message });
  }
});

module.exports = router;
