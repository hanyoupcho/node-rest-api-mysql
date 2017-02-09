/*jshint esversion: 6 */
const jwt = require('jwt-simple');

module.exports = app => {
  const cfg = app.libs.config;
  const Users = app.db.models.Users;

  /**
   * @api {post} /token Authentication Token
   * @apiGroup Credentials
   * @apiParam {String} email User email
   * @apiParam {String} password User password
   * @apiParamExample {json} input
   * {
   *  "email": "example@example.com",
   *  "password": "123abc!"
   * }
   * @apiSuccess {String} token Token of authenticated user
   * @apiSuccessExample {json} Success
   *  HTTP/1.1 200 OK
   *  {"token": "1231erjkdfkjdf"}
   * @apiErrorExample {json} Authentication error
   *  HTTP/1.1 401 Unauthorized
   */
  app.post('/token', (req, res) => {
    if (req.body.email && req.body.password) {
      const email = req.body.email;
      const password = req.body.password;
      Users.findOne({
          where: {
            email: email
          }
        })
        .then(user => {
          if (Users.isPassword(user.password, password)) {
            const payload = {
              id: user.id
            };
            res.json({
              token: jwt.encode(payload, cfg.jwtSecret)
            });
          } else {
            res.sendStatus(401);
          }
        })
        .catch(error => res.sendStatus(401));
    } else {
			res.sendStatus(401);
		}
  });
};
