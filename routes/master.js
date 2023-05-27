const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Master = require('../models/Master');

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

    // Check if the user is already a master
    if (user.userType === 'master') {
      return res.status(400).json({ error: 'User is already a master' });
    }

    // Update user type to "master"
    user.userType = 'master';
    await user.save();

    // Create a new master record
    const master = new Master({ user_id: id,additonal_info:additonal_info });

    // Save the master record
    await master.save();

    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
