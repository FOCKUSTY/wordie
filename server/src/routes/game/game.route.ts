import GameController from "../../controllers/game/game.controller";
import { Router } from "express";

const controller = new GameController();
const router = Router();

router.post('/word', controller.postWord);

export default router;