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

        new GameApi().clear(user?.id);
    };

    private readonly Animation = (document: Document) => {
        try {
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
        }
        catch (err) {
            return console.log(err);    
        };
    };

    public readonly Handler = (e: ReactMouseEvent<HTMLElement, MouseEvent>) => {
        try {
            const document = e.currentTarget.ownerDocument;
    
            (e.currentTarget as HTMLButtonElement).disabled = true;
    
            this.Animation(document);
    
            setTimeout(async () => {
                const replies = await new GameApi().getWord(this.user.id);
    
                if(!replies)
                    return;
    
                console.log(replies);

                this.createHandler.Handler(replies);
            }, 3000);
    
            setTimeout(() => {
                this.set(true);
            }, 1000);    
        }
        catch (err) {
            return console.log(err);
        };
    };
};

export default Handler;