module.exports = app => {
	app.listen(app.get('port'), () => {
		console.log(`Server is running on ${app.get('port')}`);
	});
};