/*jshint esversion: 6 */
module.exports = app => {
	/**
	 * @api {get} / API Status
	 * @apiGroup Status
	 * @apiSuccess {string} status API status' message
	 * @apiSuccessExample {json} Success
	 *  HTTP/1.1 200 OK
	 *  {"status": "NaughtyRestAPI"}
	 */
  app.get('/', (req, res) => {
    res.json({
      status: "NaughtyRestAPI"
    });
  });
};
