const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  messages: [{
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: { type: String, default: '' },
    image: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Chat', chatSchema);
