import { Request, Response } from "express";
import UserService from "../services/user.service";

const service = new UserService();

class UserController {
	public getUser = async (req: Request, res: Response) => {
		const user: any = req.user;

		if (!user) return res.send({ msg: "Error" });

		const u = await service.getUser(user.discordId);

		return res.send(u);
	};
}

export default UserController;
