const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Student = require('../models/Student');

router.post('/register', async (req, res) => {
  try {
    const { id,additonal_info } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Check if the user exists
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the user is already a student
    if (user.userType === 'student') {
      return res.status(400).json({ error: 'User is already a student' });
    }

    // Update user type to "student"
    user.userType = 'student';
    await user.save();

    // Create a new student record
    const student = new Student({ user_id: id,additonal_info:additonal_info });

    // Save the student record
    await student.save();

    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
