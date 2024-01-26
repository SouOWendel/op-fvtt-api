// import mongoose from 'mongoose';
import express from 'express';
import {authenticated} from '../services/auth.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', async (request, response) => {
	const authd = authenticated(request.headers);
	console.log(authd);
	return response.send('alo');
});

// const Updates = mongoose.model('Notes', {
// 	id: Number,
// 	minCoreVersion: String,
// 	maxCoreVersion: String,
// 	minSysVersion: String,
// 	maxSysVersion: String,
// 	type: String,
// 	display: String,
// 	title: String,
// 	content: String,
// });

// router.get('/', async (request, response) => {
// 	const notes = await Updates.find();
// 	return response.send(notes);
// });

// router.post('/', async (request, response) => {
// 	const notes = new Updates({
// 		id: request.body.id,
// 		minCoreVersion: request.body.minCoreVersion,
// 		maxCoreVersion: request.body.maxCoreVersion,
// 		minSysVersion: request.body.minSysVersion,
// 		maxSysVersion: request.body.maxSysVersion,
// 		type: request.body.type,
// 		display: request.body.display,
// 		title: request.body.title,
// 		content: request.body.content,
// 	});
// 	response.send('OK!');
// 	return await notes.save();
// });

// router.put('/:id', async (request, response) => {
// 	const note = await Updates.findByIdAndUpdate(request.params.id, {
// 		id: request.body.id,
// 		minCoreVersion: request.body.minCoreVersion,
// 		maxCoreVersion: request.body.maxCoreVersion,
// 		minSysVersion: request.body.minSysVersion,
// 		maxSysVersion: request.body.maxSysVersion,
// 		type: request.body.type,
// 		display: request.body.display,
// 		title: request.body.title,
// 		content: request.body.content,
// 	}, {new: true});
// 	return response.send(note);
// });

// router.delete('/:id', async (request, response) => {
// 	const note = await Updates.findByIdAndDelete(request.params.id);
// 	return response.send(note);
// });

export default router;
