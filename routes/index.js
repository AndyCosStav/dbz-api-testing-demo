import express from 'express';
import characterRoutes from './characterRoutes.js';

const router = express.Router();

router.use('/characters', characterRoutes);

export default router;
