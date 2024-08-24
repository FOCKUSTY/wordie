import { Response, Request } from "express";
import GameService from "../../services/game/game.service";
import Game from "../../types/game.class";
import Database from "../../database/logic/word.logic";

const service = new GameService();
const database = new Database();
const game = new Game(database);

export default class GameController {
    public postWord = (req: Request, res: Response) => {
        try {
            const word = req.body.word;

            console.log(1, req.body);
            console.log(game.getNotUsedWord(word));

            res.status(200).send({msg: 'ok'});
        } catch (err) {
            console.error(err);
            res.status(400).send({msg: 'Error'});
        };
    };
};