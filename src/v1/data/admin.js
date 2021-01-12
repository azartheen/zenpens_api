/* eslint-disable no-param-reassign */
const { generatePassword } = require('../services/utils');

const { Admin } = require('../models/admin');
const { NotFoundError } = require('../errors');

const createAdmin = async (data) => {
	data.username = data.username.toLowerCase();

	// auto generates pasword for admin
	data.password = generatePassword(8);

	const newAdmin = new Admin(data);
	await newAdmin.save();

	return data;
};

const getAdmin = async (username) => {
	const admin = await Admin.findOne({
		$or: [
			{ username: { $regex: new RegExp(`^${username}$`, 'i') } },
			{ email: { $regex: new RegExp(`^${username}$`, 'i') } },
		],
	}, {
		password: 0,
	});

	return admin;
};

const getAdminById = async (id) => {
	const admin = await Admin.findOne({ _id: id, deleted: false });

	return admin;
};

const verifyPassword = async (id, password) => {
	const admin = await Admin.findById(id);

	if (!admin) throw new NotFoundError('Could not find admin');

	return admin.comparePassword(password);
};

module.exports = {
	createAdmin,
	getAdmin,
	verifyPassword,
	getAdminById,
};
