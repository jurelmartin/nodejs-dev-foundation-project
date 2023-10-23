const express = require('express');
const sensorController = require('../controllers/sensorController');

const router = express.Router();

router.post('/', sensorController.createSensorData);

router.get('/', sensorController.getAllSensorData);

router.get('/:sensorDataId', sensorController.getSensorData);

router.put('/:sensorDataId', sensorController.updateSensorData);

router.delete('/:sensorDataId', sensorController.deleteSensorData);

module.exports = router;
