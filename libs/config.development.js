module.exports = {
	database: 'ntask',
	username: '',
	password: '',
	params: {
		dialect: 'sqlite',
		storage: 'ntask.sqlite',
		define: {
			underscored: true
		}
	},
	jwtSecret: 'd2ew9fwefjffjdajfklejfwaefewafe',
	jwtSession: {session: false}
};