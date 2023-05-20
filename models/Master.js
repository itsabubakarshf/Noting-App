// models/Master.js

const mongoose = require('mongoose');

const masterSchema = new mongoose.Schema({
  master_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  additional_master_info: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Master', masterSchema);
