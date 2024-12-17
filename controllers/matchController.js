const Profile = require('../models/Profile');
const User = require('../models/User');

exports.findMatches = async (req, res) => {
  try {
    // Fetch the current user's profile
    const currentUserProfile = await Profile.findOne({ userId: req.user.id });
    if (!currentUserProfile) {
      return res.status(404).json({ error: 'User profile not found' });
    }

    // Define filters based on skills and role (mentor vs mentee)
    const filters = {
      userId: { $ne: req.user.id }, // Exclude current user
      skills: { $in: currentUserProfile.skills }, // Match shared skills
    };

    // Determine opposite role for matchmaking
    const currentUser = await User.findById(req.user.id);
    const oppositeRole = currentUser.role === 'mentor' ? 'mentee' : 'mentor';

    // Add role filter to the query
    filters.role = oppositeRole;

    // Fetch matches based on filters
    const matches = await Profile.find(filters).populate('userId', 'username role');

    // Return the matches
    res.status(200).json(matches);
  } catch (err) {
    res.status(500).json({ error: 'Error finding matches' });
  }
};
