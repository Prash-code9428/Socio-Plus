const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  username: { type: String, required: true },
  userPic: { type: String, default: '' },
  fileType: { type: String, default: '' },
  file: { type: String, default: '' },
  text: { type: String, default: '' },
  viewers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

// TTL Index: Auto-deletes the document 86400 seconds (24 hours) after the 'createdAt' time
storySchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

module.exports = mongoose.model('Story', storySchema);
