/* eslint-disable no-unused-vars */
/*
* The Base paths of each API route is initialized here
* The respective routes file for the base route is then required and passed
* as a second argument to the base instance
*/

const express = require('express');
const middleware = require('../middlewares/index');
const homeRoutes = require('./home');
const adminRoutes = require('./admin');
const userRoutes = require('./user');

const { ErrorHandler } = require('../errors');

// Exposes the express router binding
const router = express();

// This calls the middleware(s) to be used on base routes
router.use(middleware.index());

// api routes v1
router.use('/', homeRoutes()); // Routes for index views
router.use('/admin', adminRoutes()); // Routes for admin views
router.use('/user', userRoutes()); // Routes for user views

// When route is not found, returns a json
router.use((req, res, next) => {
	const message = 'Not Found';
	return res.status(400).json({
		error: {
			message,
		},
	});
});

// Handles any error from catch block and return it well
router.use((error, req, res, next) => {
	const { errorCode, message } = ErrorHandler(error);

	return res.status(errorCode).json({
		error: {
			message,
		},
	});
});

module.exports = router;
