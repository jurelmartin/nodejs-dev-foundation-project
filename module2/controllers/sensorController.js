const mongoose = require('mongoose');
const {sensorService} = require('../services');

const createSensorData = async (req, res, next) => {
  const sensorData = await sensorService.createSensorData(req.body);
  res.status(201).json({message: 'created successfully', sensorData});
};

const updateSensorData = async (req, res, next) => {
  const sensorData = await sensorService.updateSensorData(
    req.params.sensorDataId,
    req.body
  );

  if (!sensorData) {
    return res.status(404).json({message: 'sensor data not found'});
  }
  res.status(200).json({message: 'updated successfully'});
};

const deleteSensorData = async (req, res, next) => {
  const sensorData = await sensorService.deleteSensorData(
    req.params.sensorDataId
  );

  if (!sensorData) {
    return res.status(404).json({message: 'sensor data not found'});
  }
  res.status(200).json({message: 'deleted successfully'});
};

const getSensorData = async (req, res, next) => {
  const id = req.params.sensorDataId;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({msg: `sensor data with id :${id} not found`});
  }

  const sensorData = await sensorService.getSensorDataById(id);

  if (!sensorData) {
    return res.status(404).json({
      message: `sensor data with id: ${req.params.sensorDataId} not found`,
    });
  }
  res.status(200).json({sensorData});
};

const getAllSensorData = async (req, res, next) => {
  const sensorData = await sensorService.getSensorData();

  if (!sensorData) {
    return res.status(404).json({message: 'sensor data not found'});
  }
  res.status(200).json({sensorData});
};

module.exports = {
  createSensorData,
  updateSensorData,
  deleteSensorData,
  getSensorData,
  getAllSensorData,
};
