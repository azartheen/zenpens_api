/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
const randomstring = require('randomstring');

const { NotFoundError } = require('../errors');
const { User } = require('../models/user');
const { PasswordReset } = require('../models/passwordReset');
const { emailVerifyTemplate, passwordResetTemplate } = require('../services/templateStrings');
const { sendMail } = require('../services/utils');

const createUser = async (data) => {
	data.username = data.username.toLowerCase();
	data.emailConfirmCode = randomstring.generate();

	const newUser = new User(data);
	await newUser.save();

	return newUser;
};

const getUser = async (username) => {
	const user = await User.findOne({
		deleted: false,
		isActive: true,
		$or: [
			{ username: { $regex: new RegExp(`^${username}$`, 'i') } },
			{ email: { $regex: new RegExp(`^${username}$`, 'i') } },
		],
	}, {
		password: 0,
	});

	return user;
};

const getUserById = async (id) => {
	const user = await User.findOne({ _id: id, deleted: false, isActive: true });

	return user;
};

const verifyPassword = async (id, password) => {
	const user = await User.findById(id);

	if (!user) throw new NotFoundError('Could not find user');

	return user.comparePassword(password);
};

const sendEmailVerificationEmail = async ({
	email, username, emailVerifyUrl,
}) => {
	// create email message
	const message = emailVerifyTemplate({
		username,
		link: emailVerifyUrl,
	});

	// send email to admin's email
	return sendMail({
		mailTo: email,
		subject: 'Zenpens Email Verification',
		message,
	});
};

const verifyUserEmail = async ({ email, emailConfirmCode }) => {
	const updatedUser = await User.findOneAndUpdate({
		email,
		emailConfirmCode,
		deleted: false,
		isActive: true,
	}, {
		emailConfirmCode: null,
		emailConfirmedAt: new Date(),
	}, { new: true });

	return updatedUser;
};

const setPasswordReset = async (email) => {
	const passwordToken = PasswordReset.create({
		email,
		token: randomstring.generate(),
	});

	return passwordToken.token;
};

const sendPasswordResetEmail = async ({
	email, username, passwordResetUrl,
}) => {
	// create email message
	const message = passwordResetTemplate({
		username,
		link: passwordResetUrl,
	});

	// send email to admin's email
	return sendMail({
		mailTo: email,
		subject: 'Zenpens Password Reset',
		message,
	});
};

const getTokenEmail = async (token) => {
	return PasswordReset.findOneAndDelete({
		token,
	});
};

const updatePassword = ({ email, password }) => {
	return User.findOneAndUpdate({
		email,
	}, {
		password,
	}, { new: true });
};

module.exports = {
	createUser,
	getUser,
	verifyPassword,
	getUserById,
	sendEmailVerificationEmail,
	verifyUserEmail,
	setPasswordReset,
	sendPasswordResetEmail,
	getTokenEmail,
	updatePassword,
};
