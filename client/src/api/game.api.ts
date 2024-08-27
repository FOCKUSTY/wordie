import { API_URL } from "./api";
import axios from "axios";

export default class GameApi {
    public postWord = async (word: string) => {
        try {
            const { data } = await axios.post(`${API_URL}/game/word`, {word: word});

            return data;   
        } catch (err) {
            return console.error(err);
        };
    };
    
    public getWord = async () => {
        try {
            const { data } = await axios.get<string>(`${API_URL}/game/word`);

            return data;   
        } catch (err) {
            return console.error(err);
        };
    };
};