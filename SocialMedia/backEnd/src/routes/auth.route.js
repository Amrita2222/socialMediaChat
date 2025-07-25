import express from 'express';
import {signup, login, logout, onboard} from '../controllers/auth.controller.js';
import {protectRoute} from "../middleware/auth.middleware.js"

const router = express.Router();

// router.get('/signup', signup);
// router.get('/login', login);
// router.get('/logout', logout);

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.post("/onboarding", protectRoute, onboard);

export default router;