/* eslint-disable new-cap */

import express from 'express';
import { authenticate, isAuthenticated } from '../controllers/auth.js';
const router = express.Router();

router.post('/auth', authenticate);
router.get('/check-auth', isAuthenticated, (request, response) => {
	console.log(request.url);
	return response.status(200).json({ valid: true });
});

export default router;
