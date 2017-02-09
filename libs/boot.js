/*jshint esversion: 6 */
module.exports = app => {
  if (process.env.NODE_ENV !== 'test') {
    app.db.sequelize.sync().done(() => {
      app.listen(app.get('port'), () => {
        console.log(`Server is running on ${app.get('port')}`);
      });
    });
  }
};
