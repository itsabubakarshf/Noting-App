const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');
const Class = require('../models/Class');

router.post('/create', async (req, res) => {
  try {
    const { teacherId, className, startTime, endTime } = req.body;

    // Check if all required fields are provided
    if (!teacherId || !className || !startTime || !endTime) {
      return res.status(400).json({ error: 'Teacher ID, Class Name, Start Time, and End Time are required' });
    }

    // Check if the teacher exists
    const teacher = await Teacher.findById(teacherId);
    if (!teacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }

    // Validate the date and time format
    const startTimeObj = new Date(startTime);
    const endTimeObj = new Date(endTime);
    if (isNaN(startTimeObj.getTime()) || isNaN(endTimeObj.getTime())) {
      return res.status(400).json({ error: 'Invalid date or time format' });
    }

    // Create a new class
    const newClass = new Class({
      teacher_id: teacherId,
      class_name: className,
      start_time: startTimeObj,
      end_time: endTimeObj
    });

    // Save the class
    await newClass.save();

    res.status(201).json({ message: 'Class created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
