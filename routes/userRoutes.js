const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Protected route 1
router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: `Welcome ${req.user.name}. You are Authenticated!` });
});

// Protected route 2
router.get('/dashboard', authMiddleware, (req, res) => {
    res.status(200).json({ message: `Welcome to the Dashboard, ${req.user.name}!` });
});

module.exports = router;
