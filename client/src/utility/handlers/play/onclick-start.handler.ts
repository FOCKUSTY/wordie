import { MouseEvent as ReactMouseEvent } from "react";

import type { Reply } from "@/utility/types/play/reply.type";

import GameApi from "@/api/game.api";
import { User } from "@/utility/types/user.types";

import CreateHandler from "../global/create.handler";

class Handler {
    private readonly styles: any;
    private readonly user: User;

    private readonly set: (game: boolean) => void;

    private readonly createHandler: CreateHandler;

    constructor(styles: any, replies: Reply[], user: User, set: (game: boolean) => void, setReplies: (replies: Reply[]) => void) {
        this.styles = styles;
        this.user = user;

        this.createHandler = new CreateHandler(replies, setReplies);

        this.set = set;
    };

    private readonly Animation = (document: Document) => {
        const element = document.getElementById(this.styles.start_game_component);

        if(!element)
            return;

        element.style.right = '0%';
        element.style.position = 'relative';

        setTimeout(() => {
            element.style.right = '200%';
            element.style.opacity = '0';
            
            setTimeout(() => {
                element.style.right = '0%';
            }, 1000);

            setTimeout(() => {
                element.style.opacity = '1';
            }, 1450);
        }, 350);
    };

    public readonly Handler = (e: ReactMouseEvent<HTMLElement, MouseEvent>) => {
        const document = e.currentTarget.ownerDocument;

        this.Animation(document);

        setTimeout(async () => {
            const replies = await new GameApi().getWord(this.user.id);

            if(!replies)
                return;

            this.createHandler.Handler(replies);
        }, 3000);

        setTimeout(() => {
            this.set(true);
        }, 1000);

        e.preventDefault();
    };
};

export default Handler;