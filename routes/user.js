const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Check if any of the required fields are missing or empty
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    // Check if password length is less than 8 characters
    if (password.length < 8) {
        return res.status(400).json({ message: 'Password should be at least 8 characters long' });
    }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        } else {

            const user = await User.create({ name, email, password });
            await user.save();
            res.status(201).json({ message: "User created successfully" });
        }
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

module.exports = router;