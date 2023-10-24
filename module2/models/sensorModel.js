const mongoose = require('mongoose');
const emailService = require('../services/emailService');

// This function will trigger after insert
const sendEmailOnThresholdHit = async (document, next) => {
  if (document.temperature_celsius > 20) {
    await emailService.sendEmail(
      document.timestamp,
      document.location,
      document.temperature_celsius,
      document.humidity_percent,
      document.pressure_hpa
    );
  }
  next();
};

const sensorDataSchema = new mongoose.Schema({
  // _id: String,
  timestamp: {
    type: Date,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  temperature_celsius: {
    type: Number,
    required: true,
  },
  humidity_percent: {
    type: Number,
    required: true,
  },
  pressure_hpa: {
    type: Number,
    required: true,
  },
});

sensorDataSchema.post('save', sendEmailOnThresholdHit);
const SensorData = mongoose.model('SensorData', sensorDataSchema);
module.exports = SensorData;
