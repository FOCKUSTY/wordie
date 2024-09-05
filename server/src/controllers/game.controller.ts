import { Response, Request } from "express";

import GameService from "../services/game.service";
import UserDatabase from "../database/schema/user.schema";

export default class GameController {
    constructor(){};

    public postWord = async (req: Request, res: Response) => {
        try {
            const userId: string|undefined = (await UserDatabase.findById(req.body.userId))?.discordId;
            const word = req.body.word;

            if(!userId)
                return res.status(400).send({msg: 'Error'});

            const service = new GameService(userId);
            
            setTimeout(() => {
                const reply = service.postWord(word);
                
                res.send({msg: reply});
            }, 1000);
        } catch (err) {
            console.error(err);
            
            res.status(400).send({msg: 'Error'});
        };
    };

    public getWord = (req: Request, res: Response) => {
        try {
            const userId: string|undefined = req.body.userId;
            console.log(userId, req.body, req.user);

            if(!userId)
                return res.status(400).send({msg: 'Error'});

            const service = new GameService(userId);

            setTimeout(() => {
                const word = service.getWord();
                    res.send({msg: word});
            }, 1000);
        } catch (err) {
            console.error(err);
            
            res.status(400).send({msg: 'Error'});
        };
    };

    public clear = (req: Request, res: Response) => {
        try {
            new GameService(req.body.userId).clear();

            res.status(200).send({msg: 'Success'});
        }
        catch (err) {
            console.error(err);
            
            res.status(400).send({msg: 'Error'});
        };
    };
};