const logger = require('./logger');

module.exports = (app) => {
  app.use(logger);
};
