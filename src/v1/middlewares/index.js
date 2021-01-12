/* eslint-disable consistent-return */
const { Router } = require('express');
const User = require('../data/user.js');
const Admin = require('../data/admin');
const jwt = require('../services/jwt');
const {
	UnAuthorizedAccess,
} = require('../errors');

const index = () => {
	const api = Router();

	// add middleware you want for all routes here

	return api;
};

const authenticate = async (req, res, next) => {
	try {
		let token = req.headers['x-access-token'] || req.headers.authorization || req.body.token || req.query.token; // Express headers are auto converted to lowercase

		if (!token) throw new UnAuthorizedAccess('Auth token is not supplied');

		if (token.startsWith('Bearer ')) token = token.replace('Bearer', '').trim(); // Remove Bearer from string

		const userId = jwt.verify(token);

		if (!userId) {
			throw new UnAuthorizedAccess('Token not valid');
		}

		const userType = req.headers.usertype;

		if (!userType) {
			throw new UnAuthorizedAccess('usertype not provided');
		}

		let user;

		switch (userType) {
		case 'admin':
			user = await Admin.getAdminById(userId);
			break;
		default:
			user = await User.getUserById(userId);
			break;
		}

		if (!user) {
			throw new UnAuthorizedAccess();
		}

		req.user = user;
		req.userId = user.id;
		req.isAdmin = user.role === 'admin';

		next();
	} catch (e) {
		console.log('middleware-authenticate-error:', e);
		return res.status(e.errorCode || 500).json(e);
	}
};

const authorize = async (req, res, next) => {
	try {
		if (
			req.userId !== req.params.id
            && req.userId !== req.query.id
            && req.userId !== req.body.id
		) throw new UnAuthorizedAccess();

		next();
	} catch (e) {
		res.status(e.errorCode || 500).json(e);
	}
};

module.exports = {
	index,
	authenticate,
	authorize,
};
