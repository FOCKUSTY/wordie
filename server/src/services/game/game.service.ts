import Database from "../../database/logic/word.logic";
import Game from "../../types/game.class";

const database = new Database();
const game = new Game(database);

export default class GameService {
    constructor() {};

    public postWord = (word: string) => {
        game.setWord(word);
        
        return word;
    };
};