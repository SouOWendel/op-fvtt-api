import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

const noteSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	minCoreVersion: String,
	maxCoreVersion: String,
	minSysVersion: {
		type: String,
		required: true,
	},
	maxSysVersion: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	display: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
		maxlength: 8000,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

const dbNotes = mongoose.model('Notes', noteSchema);
const dbUsers = mongoose.model('Users', userSchema);

export { dbUsers, dbNotes };
