import { FormEvent } from "react";

import GameApi from "@/api/game.api";

import type { Reply } from "@/utility/types/play/reply.type";
import { User } from "@/utility/types/user.types";

const gameApi = new GameApi();

class Handler {
    private readonly alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    private readonly user: User;
    private readonly setReplies: (replies: Reply[]) => void;

    constructor(setReplies: (replies: Reply[]) => void, user: User) {
        this.user = user;
        this.setReplies = setReplies
    };
    
    private readonly Clear = (el: any, text: string) => {
        el.value = '';
        el.placeholder = text;

        return;
    };

    public readonly Handler = async (e: FormEvent<HTMLInputElement>) => {        
        e.preventDefault();

        const document: any = e.currentTarget.ownerDocument;
        const form = document.forms.form_send;
        
        if(!form)
            return;

        const btn = form.elements.submit;
        const el = form.elements.word;
        const word: string = el.value.toLowerCase();

        for(const char of word)
            if(!this.alphabet.includes(char))
                return this.Clear(el, 'Введите слово на русском языке без пробелов и специальных символов.')

        if(!word)
            return this.Clear(el, 'Введите определенное значение.');
        
        if(word.length <= 1)
            return this.Clear(el, 'Введите слово.');

        const data = await gameApi.postWord(word, this.user.id);

        if(!data)
            return;

        for(const value of data)
            if(value.text.includes('Конец игры, я не смог найти слова... Ты победил'))
                btn.disabled = true;  

        el.vlaue = '';

        this.setReplies(data);
    };
};

export default Handler;