import type { Reply } from "@/utility/types/play/reply.type";
import Api from "./api";
import axios from "axios";

const api = new Api();

export default class GameApi {
	public readonly postWord = async (word: string, userId: string) => {
		try {
			const { data } = await axios.post<{ msg: Reply[] }>(
				`${api.url}/game/word/${userId}`,
				{ word: word }
			);

			return data.msg;
		} catch (err) {
			return console.error(err);
		}
	};

	public readonly getWord = async (userId: string) => {
		try {
			const { data } = await axios.get<{ msg: Reply[] }>(
				`${api.url}/game/word/${userId}`
			);

			return data.msg;
		} catch (err) {
			console.error(err);
			return false;
		}
	};

	public readonly clear = async (userId: string) => {
		try {
			const { data } = await axios.delete(`${api.url}/game/word/${userId}`);

			return data.msg;
		} catch (err) {
			console.error(err);
			return false;
		}
	};
}
