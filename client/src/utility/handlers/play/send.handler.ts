import { FormEvent } from "react";

import GameApi from "@/api/game.api";

import type { Reply } from "@/utility/types/play/reply.type";
import { User } from "@/utility/types/user.types";

import CreateHandler from "../global/create.handler";

import PS from "../../../styles/play/play.module.css";

const gameApi = new GameApi();

class Handler {
	private readonly alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
	private readonly user: User;
	private readonly createHandler: CreateHandler;

	constructor(setReplies: (replies: Reply[]) => void, user: User, replies: Reply[]) {
		this.user = user;
		this.createHandler = new CreateHandler(replies, setReplies);
	}

	private readonly Clear = (el: any, text: string) => {
		el.value = "";
		el.placeholder = text;

		return;
	};

	public readonly Send = async (document: any) => {
		const form = document.forms.form_send;

		if (!form) return;

		const btn = form.elements.submit;
		const el = form.elements.word;
		const word: string = el.value.toLowerCase();

		for (const char of word)
			if (!this.alphabet.includes(char))
				return this.Clear(
					el,
					"Введите слово на русском языке без пробелов и специальных символов."
				);

		if (!word) return this.Clear(el, "Введите определенное значение.");

		if (word.length <= 1) return this.Clear(el, "Введите слово.");

		this.createHandler.Handler([
			{
				name: this.user.globalName ? this.user.globalName : this.user.username,
				text: word,
				type: "bot"
			}
		]);

		el.value = "";
		el.placeholder = "Ваше слово.";

		const data = await gameApi.postWord(word, this.user.id);

		if (!data) return;

		for (const value of data)
			if (value?.text?.includes("Конец игры, я не смог найти слова... Ты победил"))
				btn.disabled = true;

		this.createHandler.Handler(data);

		setTimeout(() => {
			this.scroll();
		}, 200);
	};

	private readonly scroll = () => {
		const bot = document.getElementById(PS.bot_output) as HTMLElement;
		const game = document.getElementById(PS.game_output) as HTMLElement;

		bot.scrollTo({ top: bot.scrollHeight, behavior: "smooth" });
		game.scrollTo({ top: game.scrollHeight, behavior: "smooth" });
	};

	public readonly Handler = async (e: FormEvent<HTMLInputElement>) => {
		const document: any = e.currentTarget.ownerDocument;

		if (!e.currentTarget.disabled)
			setTimeout(() => (e.currentTarget.disabled = false), 1000);

		e.currentTarget.disabled = true;

		await this.Send(document);
	};
}

export default Handler;
