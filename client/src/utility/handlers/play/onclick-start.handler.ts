import { MouseEvent as ReactMouseEvent } from "react";

class Handler {
    private readonly styles: any;
    private readonly set: (game: boolean) => void;

    constructor(styles: any, set: (game: boolean) => void) {
        this.styles = styles;
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

        setTimeout(() => {
            this.set(true);
        }, 1000);

        e.preventDefault();
    };
};

export default Handler;