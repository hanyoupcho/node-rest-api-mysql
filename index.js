const express = require('express');
const consign = require('consign');

const app = express();

consign()
	.include('models')
	.then('libs/middlewares.js')
	.then('routes')
	.then('libs/boot.js')
	.into(app);