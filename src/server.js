import app from './app.js';
import dotenv from 'dotenv';
// import mongoose from 'mongoose';

dotenv.config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
	// mongoose.connect(process.env.MONGOOSE);
	console.log('The app has been listening on port', PORT);
	console.log(`Access on http://localhost:${PORT}`);
});
