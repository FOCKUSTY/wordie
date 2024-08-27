import { Response, Request } from "express";
import GameService from "../services/game.service";
import Game from "../types/game.class";
import Database from "../database/logic/word.logic";

const service = new GameService();

export default class GameController {
    constructor() {};

    public postWord = (req: Request, res: Response) => {
        try {
            const word = req.body.word;

            const reply = service.postWord(word);

            res.send({msg: 'ok'});
        } catch (err) {
            console.error(err);
            
            res.status(400).send({msg: 'Error'});
        };
    };

    public getWord = (req: Request, res: Response) => {
        try {
            res.status(200).send({msg: 'ok'});
        } catch (err) {
            console.error(err);
            
            res.status(400).send({msg: 'Error'});
        };
    };
};