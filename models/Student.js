const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
    unique: true,
  },
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  additional_student_info: {
    type: String,
  },
});
const studentModel = mongoose.model('Student', studentSchema);
module.exports = studentModel;
