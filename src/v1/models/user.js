/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;

const { Schema } = mongoose;

const documentSchema = new Schema({
	firstName: {
		type: String,
	},
	surName: {
		type: String,
	},
	bio: {
		type: String,
	},
	dob: {
		type: Date,
	},
	gender: {
		type: String,
		enum: ['male', 'female'],
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phone: {
		type: String,
	},
	password: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	occupation: {
		type: String,
	},
	picUrl: {
		type: String,
	},
	emailConfirmedAt: {
		type: Date,
		default: null,
	},
	emailConfirmCode: {
		type: String,
	},
	isActive: {
		type: Boolean,
		required: true,
		default: true,
	},
	isProfileComplete: {
		type: Boolean,
		default: false,
	},
	deleted: {
		type: Boolean,
		default: false,
	},
	deletedBy: {
		type: Schema.Types.ObjectId,
		ref: 'Admin',
	},
	deletedAt: {
		type: Date,
	},
	socialAuth: {
		type: String,
		enum: ['google', 'twitter', 'facebook'],
	},
},
{
	timestamps: true,
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

documentSchema.pre('save', function (next) {
	// only hash the password if it has been modified (or is new)
	if (!this.isModified('password')) return next();

	// hash user password and save
	this.password = bcrypt.hashSync(this.password, SALT_WORK_FACTOR);
	next();
});

documentSchema.pre('findOneAndUpdate', async function (next) {
	// only hash the password if it has been modified (or is new)
	if (!this._update.password) return next();

	// hash user password and save
	this._update.password = bcrypt.hashSync(this._update.password, SALT_WORK_FACTOR);
	next();
});

documentSchema.methods.comparePassword = async function (candidatePassword) {
	return bcrypt.compareSync(candidatePassword, this.password);
};

module.exports = { User: mongoose.model('User', documentSchema) };
