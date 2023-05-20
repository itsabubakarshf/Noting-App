const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  additional_student_info: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Student', studentSchema);
