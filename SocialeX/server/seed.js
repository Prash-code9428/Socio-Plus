const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const Post = require('./models/Post');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/socialeX';

const seedData = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to DB for seeding');

        // Clear existing data (optional, but good for resetting state)
        await User.deleteMany();
        await Post.deleteMany();

        // Create mock users
        const passwordHash = await bcrypt.hash('password123', 10);
        
        const user1 = await User.create({
            email: 'john@example.com',
            username: 'johndoe',
            password: passwordHash,
            profilePic: 'https://i.pravatar.cc/150?img=11',
            about: 'Software Developer from NY. Love coffee and code.',
        });

        const user2 = await User.create({
            email: 'jane@example.com',
            username: 'janedoe',
            password: passwordHash,
            profilePic: 'https://i.pravatar.cc/150?img=5',
            about: 'Avid traveler, photographer, and foodie.',
        });

        const user3 = await User.create({
            email: 'alex@example.com',
            username: 'alex_smith',
            password: passwordHash,
            profilePic: 'https://i.pravatar.cc/150?img=8',
            about: 'Just hanging out on SocialeX.',
        });

        // Add some followers
        user1.following.push(user2._id, user3._id);
        user1.followers.push(user2._id);
        await user1.save();

        user2.following.push(user1._id);
        user2.followers.push(user1._id, user3._id);
        await user2.save();

        user3.following.push(user2._id);
        user3.followers.push(user1._id);
        await user3.save();

        // Create mock posts
        const post1 = await Post.create({
            userId: user1._id,
            userName: user1.username,
            userPic: user1.profilePic,
            description: 'Hello world! This is my first post on SocialeX. Excited to be here!',
            location: 'New York, USA',
            likes: [user2._id, user3._id],
            comments: [{
                userId: user2._id,
                text: 'Welcome John!',
            }]
        });

        const post2 = await Post.create({
            userId: user2._id,
            userName: user2.username,
            userPic: user2.profilePic,
            fileType: 'image',
            file: 'https://images.unsplash.com/photo-1506744626753-1fa44cfc0715?q=80&w=600&auto=format&fit=crop',
            description: 'Enjoying the view from my latest trip.',
            location: 'Yosemite National Park',
            likes: [user1._id],
            comments: [{
                userId: user1._id,
                text: 'Looks amazing! Wish I was there.',
            }]
        });

        const post3 = await Post.create({
            userId: user3._id,
            userName: user3.username,
            userPic: user3.profilePic,
            description: 'Anyone else loving the new light mode design of this app? 🚀',
            location: 'San Francisco, CA',
            likes: [user1._id, user2._id],
            comments: []
        });

        // Link posts to users
        user1.posts.push(post1._id);
        await user1.save();

        user2.posts.push(post2._id);
        await user2.save();

        user3.posts.push(post3._id);
        await user3.save();

        console.log('Mock data seeded successfully!');
        console.log('You can login with:');
        console.log('john@example.com / password123');
        console.log('jane@example.com / password123');
        process.exit(0);
    } catch (err) {
        console.error('Error seeding data:', err);
        process.exit(1);
    }
};

seedData();
