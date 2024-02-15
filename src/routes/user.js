import express from 'express';
import * as userController from '../controllers/user.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', userController.findAll);
router.post('/', userController.create);
router.put('/', userController.update);
router.delete('/:username', userController.remove);

export default router;
