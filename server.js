const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import models
const User = require('./models/User');
const Profile = require('./models/Profile');
const Connection = require('./models/Connection');

// Import routes
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const matchRoutes = require('./routes/matchRoutes');

// Initialize express app
const app = express();

// Middleware for CORS
 
app.use(
    cors({
      origin: 'https://mentorship-frontend-amber.vercel.app',
    })
  );
// Middleware for parsing JSON bodies
app.use(express.json());

// Connect to MongoDB
const connectDB = require('./config/db');
connectDB();

// Use the routes for different endpoints
app.use('/api/auth', authRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/matches', matchRoutes);

// Optional: Uncomment if you want to create some test data directly
/*
const createData = async () => {
    try {
        // Create a user (mentor or mentee)
        const user = new User({
            username: 'john_doe',
            email: 'john@example.com',
            password: 'password123', // Ensure password is hashed
            role: 'mentor', // You can change this to 'mentee' for testing mentee data
        });
        await user.save();

        // Create a profile for the user
        const profile = new Profile({
            userId: user._id,
            skills: ['JavaScript', 'React', 'Node.js'],
            interests: ['Web Development', 'Mentoring'],
            bio: 'Experienced full-stack developer and mentor.',
        });
        await profile.save();

        // Create a mentorship connection request (mentor-mentee)
        const connection = new Connection({
            mentorId: user._id,
            menteeId: '617c1f62f10b5c3c4bc33ff7', // Use an actual mentee ID here
            status: 'pending', // 'pending', 'accepted', 'declined'
        });
        await connection.save();

        console.log('Sample data created!');
    } catch (err) {
        console.error('Error creating data:', err);
    }
};

// Uncomment this line to create the test data
// createData();
*/

// Export the app for Vercel's serverless functions to handle
app.listen(3000,()=>{console.log("port is deoloy")})
module.exports = app;
