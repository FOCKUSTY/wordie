import Database from "../database/logic/word.logic";
import { Random } from 'random-js';
import { Reply } from "./game.types";

const data = new Database();
const random = new Random();

class Game {
    private readonly _exceptions: [string, string, string] = [ 'ь', 'ъ', 'ы' ];
    private _notUsedWords: string[] = [];
    private _usedWords: string[] = [];
    private _allWords: string[] = [];
    private _data?: Database;
    private _lastLetter: string = ' ';
    private _addLetterToDB = false;

    constructor(database?: Database) {
        this._data = database;

        this.init();
    };

    private init = async () => {
        if(!this._data)
            this._data = data;

        this._allWords = await this._data.getWords();
        this._notUsedWords = await this._data.getWords();
    };

    private setUsedWords = (words: string[]) => {
        this._usedWords = [ ...this._usedWords, ...words ];
    };

    private setNotUsedWord = (word: string) => {
        this._notUsedWords = this._notUsedWords.filter(value => value != word);
    };

    private getLastLetter = (word: string): string => {
        const lastIndex = word.length-1;
        const lastLetter = word[lastIndex];

        for(const exception of this._exceptions)
        {
            if(lastLetter === exception)
            {
                const wordArray = word.split('');
                wordArray.pop();

                return this.getLastLetter(wordArray.join(''));
            };
        };

        return lastLetter;
    };

    public setAdmin(admin: boolean) {
        this._addLetterToDB = admin;
    };

    public setWord = (word: string) => {
        if(word.length <= 1)
            return;

        this.setNotUsedWord(word);
        this.setUsedWords([word]);
        
        if(this._addLetterToDB)
            data.setWords([word]);
    };

    public getWord = (): Reply[] => {
        const number = random.integer(0, this._notUsedWords.length-1);
        
        const randomWord = this._notUsedWords[number];

        const lastLetter = this.getLastLetter(randomWord);
        this._lastLetter = lastLetter;

        return [{
                name: 'Bot', type: 'bot',
                text: `Хорошо, я начинаю`
            },
            {
                name: 'Bot', type: 'bot',
                text: `${randomWord}, тебе на "${lastLetter}"`
            }
        ];
    };

    public getNotUsedWord = (word: string): Reply[] => {
        let output: Reply[] = [];

        const lastIndex = word.length-1;
        const lastLetter = word[lastIndex];

        const words = this._notUsedWords.filter((value: string) =>
            value[0] === lastLetter);

        if(words.length === 0) {
            const nextLetter = word[lastIndex-1];
            
            if(!this._exceptions.filter(ex => ex === lastLetter).includes(lastLetter))
            {
                output.push({
                    name: 'Bot', type: 'bot',
                    text: `Ой, не могу найти слово на "${lastLetter}" перехожу на другую букву (${nextLetter ? nextLetter : 'Кончились буквы'})`
                });
                
                if(word.length <= 1)
                {
                    output = [{
                        name: 'Bot', type: 'bot',
                        text: 'Конец игры, я не смог найти слова... Ты победил'
                    }];

                    return output;
                };
            };

            const wordArray = word.split('');
            wordArray.pop();

            return this.getNotUsedWord(wordArray.join(''));
        }
        else {
            const randomIndex = random.integer(0, words.length-1);
            const randomWord = random.shuffle(words)[randomIndex];
    
            this.setWord(randomWord);

            const lastLetter = this.getLastLetter(randomWord);
            this._lastLetter = lastLetter;

            output.push({
                name: 'Bot', type: 'bot',
                text: `${randomWord}, тебе на "${lastLetter}"`
            });

            return output;
        };
    };

    get lastLetter(): string {
        return this._lastLetter;
    };

    get usedWords(): string[] {
        return this._usedWords;
    };

    get allWords(): string[] {
        return this._allWords;
    };
};

export default Game;