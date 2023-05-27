const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Teacher = require('../models/Teacher');

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

    // Check if the user is already a teacher
    if (user.userType === 'teacher') {
      return res.status(400).json({ error: 'User is already a teacher' });
    }

    // Update user type to "teacher"
    user.userType = 'teacher';
    await user.save();

    // Create a new teacher record
    const teacher = new Teacher({ user_id: id,additonal_info:additonal_info });

    // Save the teacher record
    await teacher.save();

    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
