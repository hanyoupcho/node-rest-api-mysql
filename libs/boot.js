/*jshint esversion: 6 */
const https = require('https');
const fs = require('fs');

module.exports = app => {
  if (process.env.NODE_ENV !== 'test') {
    const credentials = {
      key: fs.readFileSync('./certs/www.example.com.key', 'utf8'),
      cert: fs.readFileSync('./certs/www.example.com.cert', 'utf8')
    };
    app.db.sequelize.sync().done(() => {
      https.createServer(credentials, app)
        .listen(app.get('port'), () => {
          console.log(`Server is running on ${app.get('port')}`);
        });
      // app.listen(app.get('port'), () => {
      //   console.log(`Server is running on ${app.get('port')}`);
      // });
    });
  }
};
