import { Router } from "express";
import GameRouter from './game/game.route'

const router = Router();

router.use('/game', GameRouter);

export default router;