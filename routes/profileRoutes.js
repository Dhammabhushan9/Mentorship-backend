const express = require('express');
const { createProfile, getProfile, updateProfile } = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createProfile);
router.get('/:id', authMiddleware, getProfile);
router.put('/:id', authMiddleware, updateProfile);

module.exports = router;
