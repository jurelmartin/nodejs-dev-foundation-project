const logger = require('../config/logger');

const loggerMiddleware = (req, res, next) => {
  logger.info(`Handled ${req.method} request from ${req.originalUrl}`);
  next();
};

module.exports = loggerMiddleware;
