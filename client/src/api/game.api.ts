import Api from "./api";
import axios from "axios";

const api = new Api()

export default class GameApi {
    public readonly postWord = async (word: string, userId: string) => {
        try {
            const { data } = await axios.post<{msg: { type: 'game'|'bot', name: string, text: string }[]}>(`${api.url}/game/word`, {word: word, userId});

            return data.msg;
        } catch (err) {
            return console.error(err);
        };
    };
    
    public readonly getWord = async (userId: string) => {
        try {
            const { data } = await axios.get<{msg: { type: 'game'|'bot', name: string, text: string }[]}>(`${api.url}/game/word`, {data: { userId }});

            return data.msg;
        } catch (err) {
            console.error(err);
            return false;
        };
    };
};