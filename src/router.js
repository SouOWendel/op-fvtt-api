import express from 'express';

import auth from './routes/auth.js';
import user from './routes/user.js';
import notes from './routes/notes.js';

// eslint-disable-next-line new-cap
const router = express.Router();

// Routes
router.use('/auth', auth);
router.use('/user', user);
router.use('/notes', notes);

export default router;
