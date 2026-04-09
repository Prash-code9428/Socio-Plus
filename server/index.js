const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const http = require('http');
const { Server } = require('socket.io');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Server and Socket.io setup
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/socialeX';
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Socket.io events
const socketHandler = require('./SocketHandler');
socketHandler(io);

// Basic Route
app.get('/', (req, res) => {
  res.send('Socio Plus (SocialeX) Backend is running');
});

// Import and Mount API Routes
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
