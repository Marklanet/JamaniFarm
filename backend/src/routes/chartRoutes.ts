import { Router } from 'express';
import upload from '../middlewares/uploadMiddleware'; // Import the multer middleware
import { createChart, getCharts } from '../controllers/chartControllers';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = Router();

// Route to create a chart with optional image
router.post('/create', authenticateToken, upload.single('image'), createChart);
router.get('/', authenticateToken, getCharts);

export default router;
