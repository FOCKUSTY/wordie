import Api from "./api";
import axios from "axios";

const api = new Api()

export default class GameApi {
    public postWord = async (word: string) => {
        try {
            const { data } = await axios.post(`${api.url}/game/word`, {word: word});

            return data;   
        } catch (err) {
            return console.error(err);
        };
    };
    
    public getWord = async () => {
        try {
            const { data } = await axios.get<string>(`${api.url}/game/word`);

            return data;   
        } catch (err) {
            return console.error(err);
        };
    };
};