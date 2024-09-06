import GameController from "../../controllers/game.controller";
import { Router } from "express";

const controller = new GameController();
const router = Router();

router.get('/word/:userId', controller.getWord);
router.post('/word/:userId', controller.postWord);
router.delete('/word/:userId', controller.clear);

export default router;