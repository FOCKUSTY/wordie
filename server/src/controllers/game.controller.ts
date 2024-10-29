import { Response, Request } from "express";
import GameService from "../services/game.service";

export default class GameController {
	constructor() {}

	public postWord = (req: Request, res: Response) => {
		try {
			const userId: string = req.params.userId;
			const word = req.body.word;

			const service = new GameService(userId);

			setTimeout(() => {
				const reply = service.postWord(word);

				res.send({ msg: reply });
			}, 1000);
		} catch (err) {
			console.error(err);

			res.status(400).send({ msg: "Error" });
		}
	};

	public getWord = (req: Request, res: Response) => {
		try {
			const userId: string = req.params.userId;

			const service = new GameService(userId);

			setTimeout(() => {
				const word = service.getWord();

				res.send({ msg: word });
			}, 1000);
		} catch (err) {
			console.error(err);

			res.status(400).send({ msg: "Error" });
		}
	};

	public clear = (req: Request, res: Response) => {
		try {
			new GameService(req.params.userId).clear();

			res.status(200).send({ msg: "Success" });
		} catch (err) {
			console.error(err);

			res.status(400).send({ msg: "Error" });
		}
	};
}
