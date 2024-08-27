import GameController from "../../controllers/game.controller";
import { Router } from "express";

const controller = new GameController();
const router = Router();

router.get('/word', controller.getWord);
router.post('/word', controller.postWord);

export default router;