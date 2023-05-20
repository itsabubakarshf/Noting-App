// routes/user.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register a new user
router.post('/register', async (req, res) => {

    const { username, email, password } = req.body;

    // Check if any of the required fields are missing or empty
    if (!username) {
        return res.status(400).json({ message: 'Username is missing' });
    }
    if (!email) {
        return res.status(400).json({ message: 'Email is missing' });
    }
    if (!password) {
        return res.status(400).json({ message: 'Password is missing' });
    }

    // Check if password length is less than 8 characters
    if (password.length < 8) {
        return res.status(400).json({ message: 'Password should be at least 8 characters long' });
    }
    try {
        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Create a new user
        const user = new User({ username, email, password });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});



module.exports = router;
