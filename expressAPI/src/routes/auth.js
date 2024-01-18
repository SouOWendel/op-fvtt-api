/* eslint-disable new-cap */

import express from 'express';
import {authenticate} from '../controllers/auth.js';
const router = express.Router();

router.get('/:username/:password', authenticate);

export default router;
