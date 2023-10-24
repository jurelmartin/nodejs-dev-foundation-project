const {SensorModel} = require('../models');
const emailService = require('./emailService');

const getSensorDataById = async (sensorDataId) => {
  const sensorData = await SensorModel.findById(sensorDataId);

  return sensorData;
};

const createSensorData = async (sensorDataBody) => {
  const {
    timestamp,
    location,
    temperature_celsius,
    humidity_percent,
    pressure_hpa,
  } = sensorDataBody;
  console.log({sensorDataBody});

  // if (sensorDataBody.temperature_celsius > 20) {
  //   await emailService.sendEmail(
  //     timestamp,
  //     location,
  //     temperature_celsius,
  //     humidity_percent,
  //     pressure_hpa
  //   );
  // }
  return SensorModel.create(sensorDataBody);
};

const updateSensorData = async (sensorDataId, updateBody) => {
  let sensorData = await getSensorDataById(sensorDataId);

  if (!sensorData) {
    return res.status(404).json({message: 'Sensor Data not found'});
  }

  return SensorModel.findByIdAndUpdate(sensorDataId, updateBody);
};

const deleteSensorData = async (sensorDataId) => {
  let sensorData = await getSensorDataById(sensorDataId);

  if (!sensorData) {
    return res.status(404).json({message: 'Sensor Data not found'});
  }

  return SensorModel.findByIdAndDelete(sensorDataId);
};

const getSensorData = async (sensorDataId) => {
  const sensorData = SensorModel.find();

  return sensorData;
};

module.exports = {
  createSensorData,
  updateSensorData,
  deleteSensorData,
  getSensorDataById,
  getSensorData,
};
