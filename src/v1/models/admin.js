/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
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
	password: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	deleted: {
		type: Boolean,
		default: false,
	},
	createdBy: {
		type: Schema.Types.ObjectId,
		ref: 'Admin',
	},
	updatedBy: {
		type: Schema.Types.ObjectId,
		ref: 'Admin',
	},
	deletedBy: {
		type: Schema.Types.ObjectId,
		ref: 'Admin',
	},
	deletedAt: {
		type: Date,
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

// eslint-disable-next-line func-names
documentSchema.methods.comparePassword = function (candidatePassword) {
	return bcrypt.compareSync(candidatePassword, this.password);
};
module.exports = { Admin: mongoose.model('Admin', documentSchema) };
