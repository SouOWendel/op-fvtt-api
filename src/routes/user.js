import express from 'express';
import * as userController from '../controllers/user.js';
import { isAuthenticated } from '../controllers/auth.js';
// import * as createError from 'http-errors';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', isAuthenticated, userController.findAll);
router.post('/:secret', userController.create);
router.put('/', isAuthenticated, userController.update);
router.delete('/:username', isAuthenticated, userController.remove);

// TODO: Error handling
// router.use((error, request, response, next) => {});

export default router;
