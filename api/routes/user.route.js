import express from 'express';
import { test } from '../controllers/user.controller.js';1

const router = express.Router();

router.get('/test', test);


export default router;