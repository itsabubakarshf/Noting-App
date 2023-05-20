// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ['master', 'teacher', 'student'],
    default: 'student',
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('User', userSchema);
