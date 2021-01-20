/* eslint-disable consistent-return */
const Joi = require('joi');

const registerSchema = Joi.object({
	username: Joi.string()
		.required()
		.alphanum()
		.min(5)
		.max(30),

	email: Joi.string()
		.required()
		.email(),

	dob: Joi.date()
		.required()
		.messages({
			'date.base': '"Date of birth" should be a date',
			'date.empty': '"Date of birth" cannot be an empty field',
			'any.required': '"Date of birth" is a required field',
		}),

	password: Joi.string()
		.required()
		.min(8)
		.pattern(new RegExp('(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8}'))
		.messages({
			'string.base': '"password" should be a type of \'text\'',
			'string.empty': '"password" cannot be an empty field',
			'string.pattern.base': '"password" should contain at least one uppercase letter, one lowercase letter, one digit and must be atleast 8 characters long"',
			'any.required': '"password" is a required field',
		}),

	emailVerifyUrl: Joi.string()
		.required()
		.uri(),
});

const registerValidator = async (req, res, next) => {
	try {
		await registerSchema.validateAsync(req.body, { abortEarly: false });
		next();
	} catch (err) {
		console.log('registerUserValidator', err);
		return res.status(400).json({
			message: 'Please handle these validation errors',
			errors: err.details.map((e) => e.message),
		});
	}
};

const loginSchema = Joi.object({
	username: Joi.string()
		.min(5)
		.max(30)
		.required(),

	password: Joi.string()
		.min(8)
		.required(),

});

const loginValidator = async (req, res, next) => {
	try {
		await loginSchema.validateAsync(req.body, { abortEarly: false });
		next();
	} catch (err) {
		console.log('loginUserValidator', err);
		return res.status(400).json({
			message: 'Please handle these validation errors',
			errors: err.details.map((e) => e.message),
		});
	}
};

const resendEmailVerfificationSchema = Joi.object({
	email: Joi.string()
		.email()
		.required(),

	emailVerifyUrl: Joi.string()
		.uri()
		.required(),

});

const resendEmailVerfificationValidator = async (req, res, next) => {
	try {
		await resendEmailVerfificationSchema.validateAsync(req.body, { abortEarly: false });
		next();
	} catch (err) {
		console.log('resendEmailVerfificationUserValidator', err);
		return res.status(400).json({
			message: 'Please handle these validation errors',
			errors: err.details.map((e) => e.message),
		});
	}
};

const emailVerificationSchema = Joi.object({
	email: Joi.string()
		.email()
		.required(),

	emailConfirmCode: Joi.string()
		.alphanum()
		.min(10)
		.max(50)
		.required()
		.messages({
			'string.base': 'Verification code is required',
			'string.min': '"Verification code" is invalid',
			'any.required': 'Verification code is a required field',
		}),

});

const emailVerificationValidator = async (req, res, next) => {
	try {
		await emailVerificationSchema.validateAsync(req.body, { abortEarly: false });
		next();
	} catch (err) {
		console.log('emailVerificationUserValidator', err);
		return res.status(400).json({
			message: 'Please handle these validation errors',
			errors: err.details.map((e) => e.message),
		});
	}
};

const forgotPasswordSchema = Joi.object({
	email: Joi.string()
		.min(5)
		.required(),

	passwordResetUrl: Joi.string()
		.uri()
		.required(),

});

const forgotPasswordValidator = async (req, res, next) => {
	try {
		await forgotPasswordSchema.validateAsync(req.body, { abortEarly: false });
		next();
	} catch (err) {
		console.log('forgotPasswordUserValidator', err);
		return res.status(400).json({
			message: 'Please handle these validation errors',
			errors: err.details.map((e) => e.message),
		});
	}
};

const validateTokenSchema = Joi.object({
	token: Joi.string()
		.alphanum()
		.min(10)
		.max(50)
		.required()
		.messages({
			'string.base': '"Password Reset code" is invalid',
			'string.empty': '"Password Reset code" cannot be empty',
			'string.min': '"Password Reset code" is invalid',
			'string.max': '"Password Reset code" is invalid',
			'any.required': '"Password Reset code" is a required',
		}),

});

const validateTokenValidator = async (req, res, next) => {
	try {
		await validateTokenSchema.validateAsync(req.params, { abortEarly: false });
		next();
	} catch (err) {
		console.log('forgotPasswordUserValidator', err);
		return res.status(400).json({
			message: 'Please handle these validation errors',
			errors: err.details.map((e) => e.message),
		});
	}
};

const resetPasswordSchema = Joi.object({
	token: Joi.string()
		.alphanum()
		.min(10)
		.max(50)
		.required()
		.messages({
			'string.base': '"Password Reset code" is invalid',
			'string.empty': '"Password Reset code" cannot be empty',
			'string.min': '"Password Reset code" is invalid',
			'string.max': '"Password Reset code" is invalid',
			'any.required': '"Password Reset code" is a required',
		}),

	newPassword: Joi.string()
		.min(8)
		.pattern(new RegExp('(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8}'))
		.required()
		.messages({
			'string.base': '"password" should be a type of \'text\'',
			'string.empty': '"password" cannot be an empty field',
			'string.pattern.base': '"password" should contain at least one uppercase letter, one lowercase letter, one digit and length must be greater than 7"',
			'any.required': '"password" is a required field',
		}),

});

const resetPasswordValidator = async (req, res, next) => {
	try {
		await resetPasswordSchema.validateAsync(req.body, { abortEarly: false });
		next();
	} catch (err) {
		console.log('resetPasswordUserValidator', err);
		return res.status(400).json({
			message: 'Please handle these validation errors',
			errors: err.details.map((e) => e.message),
		});
	}
};

const changePasswordSchema = Joi.object({
	email: Joi.string()
		.email()
		.required(),

	oldPassword: Joi.string()
		.required()
		.messages({
			'string.base': '"password" should be a type of \'text\'',
			'string.empty': '"password" cannot be an empty field',
			'any.required': '"password" is a required field',
		}),

	newPassword: Joi.string()
		.min(8)
		.pattern(new RegExp('(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8}'))
		.required()
		.messages({
			'string.base': '"password" should be a type of \'text\'',
			'string.empty': '"password" cannot be an empty field',
			'string.pattern.base': '"password" should contain at least one uppercase letter, one lowercase letter, one digit and length must be greater than 7"',
			'any.required': '"password" is a required field',
		}),

});

const changePasswordValidator = async (req, res, next) => {
	try {
		await changePasswordSchema.validateAsync(req.body, { abortEarly: false });
		next();
	} catch (err) {
		console.log('changePasswordUserValidator', err);
		return res.status(400).json({
			message: 'Please handle these validation errors',
			errors: err.details.map((e) => e.message),
		});
	}
};

module.exports = {
	registerValidator,
	loginValidator,
	resendEmailVerfificationValidator,
	emailVerificationValidator,
	forgotPasswordValidator,
	validateTokenValidator,
	resetPasswordValidator,
	changePasswordValidator,
};
