import express from 'express';
import cors from 'cors';
import router from './router.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: ['http://localhost:5173'],
		credentials: true,
	}),
);
app.use(router);

export default app;
