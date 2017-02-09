/*jshint esversion: 6 */
module.exports = app => {
  const Users = app.db.models.Users;

  /**
   * @api {post} /users Create a user
   * @apiGroup User
   * @apiParam {String} name User name
   * @apiParam {String} email User email
   * @apiParam {String} password User password
   * @apiParamExample {json} Parameter Example
   *  {
   *    "name": "example",
   *    "email": "example@example.com",
   *    "password": "password"
   *  }
   * @apiSuccess {Number} id User id
   * @apiSuccess {String} name User name
   * @apiSuccess {String} email User email
   * @apiSuccess {String} password User encrypted password
   * @apiSuccess {Date} updated_at Update's date
   * @apiSuccess {Date} created_at Register's date
   * @apiSuccessExample {json} Success 200 Example
   *  HTTP/1.1 200 OK
   *  {
   *   "id": 1,
   *   "name": "example",
   *   "email": "example@example.com"
   *   "password": "1289f239f29f02h3f2",
   *   "updated_at": "2017-02-014-10T15:20:11.700z",
   *   "created_at": "2017-02-014-10T15:20:11.700z"
   *  }
   * @apiErrorExample {json} Failed 4XX Example
   *   HTTP/1.1 412 Precondition Failed
   */
  app.post('/users', (req, res) => {
    Users.create(req.body)
      .then(result => {
        console.log(result);
        res.json(result);
      })
      .catch(error => {
        res.status(412).json({
          msg: error.message
        });
      });
  });

  app.route('/user')
    .all(app.auth.authenticate())
    /**
     * @api {get} /user Read a user
     * @apiGroup User
     * @apiHeader {String} Authorization Token of authenticated user
     * @apiHeaderExample {json} Header
     *   {"Authorization", "JWT 2hf2oifhi23ofj239fj2f9"}
     * @apiSuccess {Number} id User id
     * @apiSuccess {String} name User name
     * @apiSuccess {String} email User email
     * @apiSuccessExample {json} Success
     *  HTTP/1.1 200 OK
     *  {
     *   "id": 1,
     *   "name": "example",
     *   "email": "example@example.com"
     *  }
     * @apiErrorExample {json} Find error
     *   HTTP/1.1 412 Precondition Failed
     */
    .get((req, res) => {
      Users.findById(req.user.id, {
          attributes: ['id', 'name', 'email']
        })
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({
            msg: error.message
          });
        });
    })
    /**
     * @api {delete} /user Delete a user
     * @apiGroup User
     * @apiHeader {String} Authorization Token of authenticated user
     * @apiHeaderExample {json} Header
     *   {"Authorization", "JWT 2hf2oifhi23ofj239fj2f9"}
     * @apiSuccessExample {json} Success
     *  HTTP/1.1 204 No Content
     * @apiErrorExample {json} Delete error
     *   HTTP/1.1 412 Precondition Failed
     */
    .delete((req, res) => {
      Users.destroy({
          id: req.user.id
        })
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({
            msg: error.message
          });
        });
    });
};
