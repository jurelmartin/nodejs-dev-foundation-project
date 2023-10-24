const express = require('express');
const sensorController = require('../controllers/sensorController');
const {body} = require('express-validator');
const validateRules = require('../middleware/validatorMiddleware');

const router = express.Router();

const createSensorDataRule = [
  body('timestamp').isISO8601(),
  body('location').isString(),
  body('temperature_celsius').isFloat({gt: 0}),
  body('humidity_percent').isInt({gt: 0}),
  body('pressure_hpa').isInt({gt: 0}),
];

const updateSensorDataRule = [
  body('timestamp').isISO8601().optional(),
  body('location').isString().optional(),
  body('temperature_celsius').isFloat({gt: 0}).optional(),
  body('humidity_percent').isInt({gt: 0}).optional(),
  body('pressure_hpa').isInt({gt: 0}).optional(),
];

router.post(
  '/',
  createSensorDataRule,
  validateRules,
  sensorController.createSensorData
);

router.get('/', sensorController.getAllSensorData);

router.get('/:sensorDataId', sensorController.getSensorData);

router.put(
  '/:sensorDataId',
  updateSensorDataRule,
  validateRules,
  sensorController.updateSensorData
);

router.delete('/:sensorDataId', sensorController.deleteSensorData);

module.exports = router;
