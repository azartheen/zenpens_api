/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const documentSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	token: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: new Date(),
		required: true,
	},
},
{
	toObject: {
		transform(doc, ret) {
			ret.id = ret._id;
			delete ret._id;
			delete ret.__v;
		},
	},
	toJSON: {
		transform(doc, ret) {
			ret.id = ret._id;
			delete ret._id;
			delete ret.__v;
		},
	},
});

module.exports = { PasswordReset: mongoose.model('PasswordReset', documentSchema) };
