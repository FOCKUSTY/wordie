import { API_URL } from "./api";
import axios from "axios";

export default class GameApi {
    public postWord = async (word: string) => {
        try {
            console.log(1)
            const { data } = await axios.post<string>(`${API_URL}/game/word`, {word: word});
            console.log(data)

            return data;   
        } catch (err) {
            return console.error(err);
        };
    };
};