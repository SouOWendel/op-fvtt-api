import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import auth from './routes/auth.js';
import product from './routes/product.js';

dotenv.config();
const app = express();
app.use(express.json(), cors());

const Updates = mongoose.model('Notes', {
	id: Number,
	minCoreVersion: String,
	maxCoreVersion: String,
	minSysVersion: String,
	maxSysVersion: String,
	type: String,
	display: String,
	title: String,
	content: String,
});

// Routes
app.use('/auth', auth);
app.use('/product', product);

app.get('/notes', async (request, response) => {
	const notes = await Updates.find();
	return response.send(notes);
});

app.post('/notes', async (request, response) => {
	const notes = new Updates({
		id: request.body.id,
		minCoreVersion: request.body.minCoreVersion,
		maxCoreVersion: request.body.maxCoreVersion,
		minSysVersion: request.body.minSysVersion,
		maxSysVersion: request.body.maxSysVersion,
		type: request.body.type,
		display: request.body.display,
		title: request.body.title,
		content: request.body.content,
	});
	response.send('OK!');
	return await notes.save();
});

app.put('/notes/:id', async (request, response) => {
	const note = await Updates.findByIdAndUpdate(request.params.id, {
		id: request.body.id,
		minCoreVersion: request.body.minCoreVersion,
		maxCoreVersion: request.body.maxCoreVersion,
		minSysVersion: request.body.minSysVersion,
		maxSysVersion: request.body.maxSysVersion,
		type: request.body.type,
		display: request.body.display,
		title: request.body.title,
		content: request.body.content,
	}, {new: true});
	return response.send(note);
});

app.delete('/notes/:id', async (request, response) => {
	const note = await Updates.findByIdAndDelete(request.params.id);
	return response.send(note);
});

app.listen(process.env.PORT, () => {
	mongoose.connect(process.env.MONGOOSE);
	console.log('Example app listening on port', process.env.PORT);
});
