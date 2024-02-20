/* eslint-disable new-cap */

import express from 'express';
import { authenticate, isAuthenticated } from '../controllers/auth.js';
const router = express.Router();

router.post('/auth', authenticate);
router.get('/check-auth', isAuthenticated, (request, response) => {
	return response.json('Authenticated');
});

export default router;
