const {SensorModel} = require('../models');

const getSensorDataById = async (sensorDataId) => {
  const sensorData = await SensorModel.findById(sensorDataId);

  return sensorData;
};

const createSensorData = async (sensorDataBody) => {
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
