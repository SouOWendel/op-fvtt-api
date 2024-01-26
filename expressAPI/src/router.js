import express from 'express';

import auth from './routes/auth.js';
import product from './routes/product.js';
import notes from './routes/notes.js';

// eslint-disable-next-line new-cap
const router = express.Router();

// Routes
router.use('/auth', auth);
router.use('/product', product);
router.use('/notes', notes);

export default router;
