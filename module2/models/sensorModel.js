const mongoose = require('mongoose');

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

const SensorData = mongoose.model('SensorData', sensorDataSchema);
module.exports = SensorData;
