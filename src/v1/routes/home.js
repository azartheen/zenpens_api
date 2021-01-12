/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/*
 * Create all instances of the Users sub-routes in this file
 * The base route is initialized in the index file of the routes directly
 * Full route paths of each sub-route is stated as a comment on a line above the sub-route instance
 * Middlewares can also be added here and passed as a second argument e.g: api.get('', authenticate, indexController.home);.
*/

const { Router } = require('express');

const api = Router();
const indexController = require('../controllers/index');
const { authenticate, authorize, userIsVerified } = require('../middlewares');

module.exports = () => {
	// ----------User specific routes --------------

	// "/" - Returns a succes message for the api
	api.get('', indexController.intro);

	return api;
};
