const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('./config/db');
const cors = require('cors');

//
const User=require('./models/User');
const Profile=require('./models/Profile')
const Connection=require('./models/Connection')
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// data input in data base
/*
// Create User, Profile, and Connection
const createData = async () => {
    try {
      // Create a new user (mentor or mentee)
      const user = new User({
        username: 'john_doe',
        email: 'john@example.com',
        password: 'password123', // Ideally, hash the password before saving
        role: 'mentor',
      });
  
      await user.save();
      console.log('User created:', user);
  
      // Create a profile for the user
      const profile = new Profile({
        userId: user._id,
        skills: ['JavaScript', 'React', 'Node.js'],
        interests: ['Web Development', 'Mentoring'],
        bio: 'Experienced full-stack developer and mentor.',
      });
  
      await profile.save();
      console.log('Profile created:', profile);
  
      // Create a mentorship connection request (mentor-mentee)
      const connection = new Connection({
        mentorId: user._id,
        menteeId:'617c1f62f10b5c3c4bc33ff7', // Example mentee ID (replace with an actual ID)
        status: 'pending', // Can be 'pending', 'accepted', or 'declined'
      });
  
      await connection.save();
      console.log('Connection request created:', connection);
    } catch (err) {
      console.error('Error creating data:', err);
    }
  };
  
  // Call the function to create data
  createData();
*/
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const matchRoutes = require('./routes/matchRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/matches', matchRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


