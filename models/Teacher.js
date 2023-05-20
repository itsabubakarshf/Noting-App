// models/Teacher.js

const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  teacher_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  additional_teacher_info: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Teacher', teacherSchema);
