import { Request, Response, Router } from "express";
import { isAuthenticated } from "../../utils/middleware";
import UserController from "../../controllers/user.controller";

const router = Router();

router.get('/user', isAuthenticated, new UserController().getUser);

export default router;