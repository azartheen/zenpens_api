const http = require('http');
const express = require('express');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const cors = require('cors');
const initializeDb = require('./v1/db');
const routes = require('./v1/routes');

// Defaults
app.use(express.json({
	limit: process.env.BODY_LIMIT,
}));

// app headers
app.use(cors());

// connect to db
initializeDb.db();

// api routes v1
app.use('/v1', routes);

server.on('error', (e) => {
	console.log('could not start server: ', e.message);
});
server.listen(process.env.PORT, () => {
	console.log(
		[
			'---------------------------',
			'Server Running',
			'---------------------------',
			`Port: ${server.address().port}`,
			'---------------------------',
		],
	);
});

module.exports = app;
