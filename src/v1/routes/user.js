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
const userController = require('../controllers/user');
const {
	registerValidator, loginValidator, resendEmailVerfificationValidator, emailVerificationValidator, forgotPasswordValidator, validateTokenValidator, resetPasswordValidator, changePasswordValidator,
} = require('../validators/user');
const { authenticate } = require('../middlewares');

module.exports = () => {
	// ----------User specific routes --------------

	// "/" - Returns a success message for the api
	api.post('/register', registerValidator, userController.register);

	api.post('/login', loginValidator, userController.login);

	api.post('/resend-email', authenticate, resendEmailVerfificationValidator, userController.resendEmailVerification);

	api.post('/email-verify', authenticate, emailVerificationValidator, userController.emailVerification);

	api.post('/forgot-password', forgotPasswordValidator, userController.forgotPassword);

	api.get('/validate-password-token/:token', validateTokenValidator, userController.validatePasswordToken);

	api.post('/reset-password', resetPasswordValidator, userController.resetPassword);

	api.post('/change-password', authenticate, changePasswordValidator, userController.changePassword);

	return api;
};
