module.exports = app => {
	app.db.sync().done(() => {
		app.listen(app.get('port'), () => {
		console.log(`Server is running on ${app.get('port')}`);
		});
	});	
};