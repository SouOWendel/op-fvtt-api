import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json(), cors());
const port = 3000;

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

app.get('/', async (request, response) => {
	const notes = await Updates.find();
	return response.send(notes);
});

app.post('/', async (request, response) => {
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

app.put('/:id', async (request, response) => {
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

app.delete('/:id', async (request, response) => {
	const note = await Updates.findByIdAndDelete(request.params.id);
	return response.send(note);
});

app.listen(port, () => {
	mongoose.connect('mongodb+srv://souowendel:7I1zTaiiIRoKEZZ2@op-fvtt-api.ttflxny.mongodb.net/?retryWrites=true&w=majority');
	console.log('Example app listening on port', port);
});
