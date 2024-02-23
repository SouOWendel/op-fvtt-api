// import mongoose from 'mongoose';
import express from 'express';
import * as notesController from '../controllers/notes.js';
import { isAuthenticated } from '../controllers/auth.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', notesController.findAll);
router.get('/:id', notesController.consult);
router.post('/', isAuthenticated, notesController.create);
router.put('/:id', isAuthenticated, notesController.update);
router.delete('/:id', isAuthenticated, notesController.remove);

export default router;
