import { Router } from "express";

import GameRouter from './game/game.router'
import AuthRouter from './auth/auth.router'
import UserRouter from './user/user.router'

const router = Router();

router.use('/game', GameRouter);
router.use('/auth', AuthRouter);
router.use('/users', UserRouter);

export default router;