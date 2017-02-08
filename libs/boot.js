module.exports = app => {
	app.db.sequelize.sync().done(() => {
		app.listen(app.get('port'), () => {
		console.log(`Server is running on ${app.get('port')}`);
		});
	});	
};