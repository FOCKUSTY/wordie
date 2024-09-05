import { Reply } from "types/game.types";
import Database from "../database/logic/word.logic";
import Game from "../types/game.class";

const database = new Database();
const games: { [key: string]: Game } = {};

export default class GameService {
    private readonly _userId: string;
    private _game: Game;
    private admin: boolean = false;

    constructor(userId: string, admin: boolean = false) {
        this._userId = userId;
        this._game = games[userId];
        this.admin = admin;

        this.init();
    };

    private readonly init = () => {
        const game = games[this._userId];

        if(game) {
            this._game = game;
        }
        else {
            this._game = new Game(database);
            games[this._userId] = new Game(database);  
        };
    };

    public readonly postWord = (word: string): Reply[] => {
        const game = this._game;
        game.setWord(word);

        const data: Reply[] = [];

        if(game.lastLetter !== word[0] && game.lastLetter !== ' ')
        {
            data.push({
                name: 'Game', type: 'game',
                text: 'Вы написали слово не на ту букву, будьте внимательней'
            });
        };
        
        data.push(...game.getNotUsedWord(word));

        return data;
    };

    public readonly clear = () => {
        this._game = new Game(database);
        games[this._userId] = new Game(database);
    };

    public readonly getWord = () => {
        return this._game.getWord();
    };
};