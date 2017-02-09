/*jshint esversion: 6 */
module.exports = {
  database: 'ntask_test',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'ntask.sqlite',
    logging: false,
    define: {
      underscored: true
    }
  },
  jwtSecret: 'd2ew9fwefjffjdajfklejfwaefewafe',
  jwtSession: {
    session: false
  }
};
