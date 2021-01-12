/* eslint-disable consistent-return */

const Admin = require('../data/admin');
const jwt = require('../services/jwt');
const { createAdminEmailTemplate } = require('../services/templateStrings');
const { sendMail } = require('../services/utils');

const {
	BadRequestError, ServerError,
} = require('../errors');

const login = async (req, res, next) => {
	try {
		const admin = await Admin.getAdmin(req.body.username);

		// if no admin was found
		if (!admin) throw new BadRequestError('Incorrect Username or Password');

		// Verify Password
		const passwordCorrect = await Admin.verifyPassword(admin.id, req.body.password);

		if (!passwordCorrect) throw new BadRequestError('Incorrect Username or Password');

		const token = await jwt.sign(admin.id);

		if (!token) throw new ServerError('Failed to generate Token');

		return res.status(200).json({
			message: 'Login Successful',
			data: {
				admin,
				auth: token,
			},
			meta: {
				currentPage: 1,
				pageSize: 1,
				pageTotal: 1,
			},
		});
	} catch (e) {
		console.log('adminController-login', e);
		next(e);
	}
};

const create = async (req, res, next) => {
	try {
		// assign createdBy from req.userId
		req.body.createdBy = req.userId;

		// get the mail login url
		const loginUrl = req.body.loginurl || '#';

		const newAdmin = await Admin.createAdmin(req.body);

		// create email message
		const message = createAdminEmailTemplate({
			username: newAdmin.username,
			password: newAdmin.password,
			loginUrl,
		});

		// send email to admin's email
		const messageRes = await sendMail({
			mailTo: newAdmin.email,
			subject: 'Admin Account Details',
			message,
		});

		// for debug process
		console.log('adminController-send email response', messageRes);

		return res.status(201).json({
			message: 'Admin created Successfully',
			meta: {
				currentPage: 1,
				pageSize: 1,
				pageTotal: 1,
			},
		});
	} catch (e) {
		console.log('adminController-create', e);
		next(e);
	}
};

module.exports = {
	login,
	create,
};
