/* eslint-disable consistent-return */
const moment = require('moment');

const User = require('../data/user');
const jwt = require('../services/jwt');

const {
	BadRequestError, ServerError,
} = require('../errors');

const login = async (req, res, next) => {
	try {
		const user = await User.getUser(req.body.username);

		// if no user was found
		if (!user) throw new BadRequestError('Incorrect Username or Password');

		// Verify Password
		const passwordCorrect = await User.verifyPassword(user.id, req.body.password);

		if (!passwordCorrect) throw new BadRequestError('Incorrect Username or Password');

		const token = await jwt.sign(user.id);

		if (!token) throw new ServerError('Failed to generate Token');

		// delete user password
		delete user.password;

		return res.status(200).json({
			message: 'Login Successful',
			data: {
				user,
				auth: token,
			},
			meta: {
				currentPage: 1,
				pageSize: 1,
				pageTotal: 1,
			},
		});
	} catch (e) {
		console.log('userController-login', e);
		next(e);
	}
};

const register = async (req, res, next) => {
	try {
		const newUser = await User.createUser(req.body);

		// get the email veriication route for the mail
		const emailVerifyUrl = `${req.body.emailVerifyUrl}/${newUser.emailConfirmCode}`;

		// send email to user for email verification
		const messageRes = await User.sendEmailVerificationEmail({
			email: newUser.email,
			username: newUser.username,
			emailVerifyUrl,
		});

		console.log('userController-send email response', messageRes);

		const token = await jwt.sign(newUser.id);

		if (!token) throw new ServerError('Failed to generate Token');

		delete newUser.password;

		return res.status(200).json({
			message: 'User registered Successfully',
			data: {
				newUser,
				auth: token,
			},
			meta: {
				currentPage: 1,
				pageSize: 1,
				pageTotal: 1,
			},
		});
	} catch (e) {
		console.log('userController-register', e);
		next(e);
	}
};

const resendEmailVerification = async (req, res, next) => {
	try {
		const user = await User.getUser(req.body.email);

		// if no user was found
		if (!user || !user.emailConfirmCode) throw new BadRequestError('Invalid request');

		// get the email veriication route for the mail
		const emailVerifyUrl = `${req.body.emailVerifyUrl}/${user.emailConfirmCode}`;

		// send email to user for email verification
		const messageRes = await User.sendEmailVerificationEmail({
			email: user.email,
			username: user.username,
			emailVerifyUrl,
		});

		console.log('userController-resend email response', messageRes);

		return res.status(200).json({
			message: 'Verification code has been re-sent',
			meta: {
				currentPage: 1,
				pageSize: 1,
				pageTotal: 1,
			},
		});
	} catch (e) {
		console.log('userController-resendEmailVerification', e);
		next(e);
	}
};

const emailVerification = async (req, res, next) => {
	try {
		const user = await User.verifyUserEmail(req.body);

		// if no user was found
		if (!user) throw new BadRequestError('Invalid details');

		return res.status(200).json({
			message: 'Account Email verified successfully',
			meta: {
				currentPage: 1,
				pageSize: 1,
				pageTotal: 1,
			},
		});
	} catch (e) {
		console.log('userController-emailVerification', e);
		next(e);
	}
};

const forgotPassword = async (req, res, next) => {
	try {
		const user = await User.getUser(req.body.email);

		// if no user was found
		if (!user) throw new BadRequestError('Invalid details');

		// checking for outstanding token first
		let token = await User.updatePasswordReset(user.email);

		token = (token) || await User.createPasswordReset(user.email);

		// get the password reset url route for email link
		const passwordResetUrl = `${req.body.passwordResetUrl}/${token.token}`;

		// send email to user for pasword reset
		const messageRes = await User.sendPasswordResetEmail({
			email: user.email,
			username: user.username,
			token,
			passwordResetUrl,
		});

		console.log('userController-password reset email response', messageRes);

		return res.status(200).json({
			message: `Password Reset link has been sent to ${user.email}`,
			meta: {
				currentPage: 1,
				pageSize: 1,
				pageTotal: 1,
			},
		});
	} catch (e) {
		console.log('userController-forgotPassword', e);
		next(e);
	}
};

const validatePasswordToken = async (req, res, next) => {
	try {
		const passwordToken = await User.getTokenEmail(req.params.token);

		// if no passwordToken was found
		if (!passwordToken) throw new BadRequestError('Invalid token');

		return res.status(200).json({
			message: 'Token Verified Successfully!',
			meta: {
				currentPage: 1,
				pageSize: 1,
				pageTotal: 1,
			},
		});
	} catch (e) {
		console.log('userController-validatePasswordToken', e);
		next(e);
	}
};

const resetPassword = async (req, res, next) => {
	try {
		const passwordToken = await User.getTokenEmail(req.body.token);

		// if no passwordToken was found
		if (!passwordToken) throw new BadRequestError('Invalid details');

		const expiryTime = moment(passwordToken.createdAt).add(10, 'm').format('x');

		const timeNow = moment().format('x');

		// if the token has expired
		if (timeNow > expiryTime) throw new BadRequestError('Token is no longer valid');

		const user = await User.getUser(passwordToken.email);

		// if no user was found
		if (!user) throw new BadRequestError('Account with Email is invalid');

		const updatedUser = await User.updatePassword({
			email: user.email,
			password: req.body.newPassword,
		});

		await User.deleteTokenEmail({
			token: req.body.token,
			email: user.email,
		});

		return res.status(200).json({
			message: `Password reset for ${updatedUser.username} is successful`,
			meta: {
				currentPage: 1,
				pageSize: 1,
				pageTotal: 1,
			},
		});
	} catch (e) {
		console.log('userController-resetPassword', e);
		next(e);
	}
};

const changePassword = async (req, res, next) => {
	try {
		const user = await User.getUser(req.body.email);

		// if no user was found
		if (!user) throw new BadRequestError('Account with Email is invalid');

		// Verify old Password
		const passwordCorrect = await User.verifyPassword(user.id, req.body.oldPassword);

		if (!passwordCorrect) throw new BadRequestError('Incorrect Password');

		const updatedUser = await User.updatePassword({
			email: user.email,
			password: req.body.newPassword,
		});

		return res.status(200).json({
			message: `Password change for ${updatedUser.username} is successful`,
			meta: {
				currentPage: 1,
				pageSize: 1,
				pageTotal: 1,
			},
		});
	} catch (e) {
		console.log('userController-changePassword', e);
		next(e);
	}
};

module.exports = {
	login,
	register,
	resendEmailVerification,
	emailVerification,
	forgotPassword,
	validatePasswordToken,
	resetPassword,
	changePassword,
};
