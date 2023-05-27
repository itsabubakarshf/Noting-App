const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const Class = require('../models/Class');
const Attendance = require('../models/Attendance');

router.post('/mark', async (req, res) => {
  try {
    const { studentId, classId, attendanceDate, markedPresent, reasonForAbsence } = req.body;

    // Check if all required fields are provided
    if (!studentId) {
      return res.status(400).json({ error: 'Student ID is required' });
    }
    if (!classId) {
      return res.status(400).json({ error: 'Class ID is required' });
    }
    if (!attendanceDate) {
      return res.status(400).json({ error: 'Attendance date is required' });
    }
    if (!markedPresent) {
      return res.status(400).json({ error: 'Marked present is required' });
    }

    // Check if the student and class exist
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    const classObj = await Class.findById(classId);
    if (!classObj) {
      return res.status(404).json({ error: 'Class not found' });
    }

    // Validate attendance date format
    const validDate = /^\d{4}-\d{2}-\d{2}$/.test(attendanceDate);
    if (!validDate) {
      return res.status(400).json({ error: 'Invalid attendance date format. Please use YYYY-MM-DD' });
    }

    // Create a new attendance record
    const newAttendance = new Attendance({
      student_id: studentId,
      class_id: classId,
      attendance_date: attendanceDate,
      marked_present: markedPresent,
      reason_for_absence: reasonForAbsence
    });

    // Save the attendance record
    await newAttendance.save();

    res.status(201).json({ message: 'Attendance record created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
