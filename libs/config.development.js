/*jshint esversion: 6 */
const logger = require('./logger.js');

module.exports = {
  database: 'ntask',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'ntask.sqlite',
    logging: (sql) => {
      logger.info(`[${new Date()}] ${sql}`);
    },
    define: {
      underscored: true
    }
  },
  jwtSecret: 'd2ew9fwefjffjdajfklejfwaefewafe',
  jwtSession: {
    session: false
  }
};
