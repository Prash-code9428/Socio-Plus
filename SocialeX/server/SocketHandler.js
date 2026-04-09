const Chat = require('./models/Chat');

module.exports = function(io) {
  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // 1. Join a specific chat room
    // The client should emit this when they open a specific chat
    socket.on('joinChat', (chatId) => {
      socket.join(chatId);
      console.log(`User ${socket.id} joined chat: ${chatId}`);
    });

    // 2. Logic to handle real-time messaging (Text, Emojis, Images)
    socket.on('sendMessage', async (messageData) => {
      const { chatId, senderId, text, image } = messageData;
      // text can natively contain emojis as standard unicode characters.
      // image will contain the URL or base64 of the shared image.

      try {
        // Find or create the chat in the DB
        let chat = await Chat.findById(chatId);
        if (!chat) {
          chat = new Chat({ _id: chatId, messages: [] });
        }

        // Construct the new message
        const newMessage = {
          senderId,
          text: text || '',
          image: image || '',
          createdAt: new Date()
        };

        // Persist message to database
        chat.messages.push(newMessage);
        await chat.save();

        // Broadcast the message globally to the room so all participants see it instantly
        io.to(chatId).emit('receiveMessage', newMessage);
      } catch (error) {
        console.error('Error saving message in real-time handler:', error);
      }
    });

    // Handle user disconnect
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};
