module.exports = app => {
	app.get('/', (req, res) => {
		res.json({status: "Test Node.js API"});
	});
};