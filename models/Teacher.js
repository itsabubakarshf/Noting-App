const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  teacher_id: {
    type: String,
    required: true,
    unique: true,
  },
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  additional_teacher_info: {
    type: String,
  },
});

const teacherModel = mongoose.model('Teacher', teacherSchema);
module.exports = teacherModel
