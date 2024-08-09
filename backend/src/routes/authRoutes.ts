import { Router } from 'express';
import { authenticateToken } from '../middlewares/authMiddleware';
import { register, login, getCurrentUser } from '../controllers/authController';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/current-user', authenticateToken, getCurrentUser); // Add this line

export default router;
