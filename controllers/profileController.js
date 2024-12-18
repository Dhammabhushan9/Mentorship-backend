const Profile = require('../models/Profile');

exports.createProfile = async (req, res) => {
  const { skills, interests, bio } = req.body;
  console.log(skills)
  try {
    const profile =  await Profile.create({ userId: req.user.id, skills, interests, bio });
  
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ error: 'Error creating profile' });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.id });
    if (!profile) return res.status(404).json({ error: 'Profile not found' });

    res.status(200).json(profile);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching profile' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate({ userId: req.params.id }, req.body, { new: true });
    res.status(200).json(profile);
  } catch (err) {
    res.status(400).json({ error: 'Error updating profile' });
  }
};
