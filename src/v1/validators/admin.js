/* eslint-disable consistent-return */
const Joi = require('joi');

const createSchema = Joi.object({
	firstName: Joi.string()
		.required(),

	surName: Joi.string()
		.required(),

	username: Joi.string()
		.alphanum()
		.min(5)
		.max(30)
		.required(),

	email: Joi.string()
		.email()
		.required(),

	loginurl: Joi.string()
		.uri()
		.required(),

});

const createValidator = async (req, res, next) => {
	try {
		await createSchema.validateAsync(req.body, { abortEarly: false });
		next();
	} catch (err) {
		console.log('createAdminValidator', err);
		return res.status(400).json({
			message: 'Please handle these validation errors',
			errors: err.details.map((e) => e.message),
		});
	}
};

module.exports = {
	createValidator,
};
