import { Router } from "express";

import GameRouter from './game/game.router'
import AuthRouter from './auth/auth.router'
import UserRouter from './user/user.router'

const router = Router();

router.use('/', (_req: any, res: any) => res.status(200).send({msg: 'Ok'}));
router.use('/game', GameRouter);
router.use('/auth', AuthRouter);
router.use('/users', UserRouter);

export default router;