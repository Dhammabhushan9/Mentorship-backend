const express = require('express');
const { findMatches } = require('../controllers/matchController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, findMatches);

module.exports = router;
