const accounts = require('./account');

module.exports = (app) => {
  app.use('/accounts', accounts);
};
