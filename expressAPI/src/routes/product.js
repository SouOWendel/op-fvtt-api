/* eslint-disable new-cap */

import express from 'express';
import {findAll} from '../controllers/product.js';
const router = express.Router();

router.get('/', findAll);

export default router;
