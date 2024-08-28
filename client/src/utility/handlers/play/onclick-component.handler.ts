import { MouseEvent as ReactMouseEvent } from "react";

import type { Component } from "@/utility/types/play/component.type";

class Handler {
    private readonly setComponent: (component: Component) => void;
    private readonly styles: any;

    constructor(set: (component: Component) => void, styles: any) {
        this.setComponent = set;
        this.styles = styles;
    };

    public readonly Handler = (e: ReactMouseEvent<HTMLElement, MouseEvent>, component: Component) => {
        if(component !== 'nothing')
            this.setComponent(component);

        const document = e.currentTarget.ownerDocument;

        setTimeout(() => {
            const element = document.getElementById(this.styles.section_component);
            const children: any = element?.children;

            if(!element || !children)
                return;
    
            for(const child of children)
                child.className = `${child.className} ${this.styles.child}`;

            if(component === 'nothing')
            {
                for(const child of children) {
                    child.style.opacity = '0';
                    setTimeout(() => child.style.display = 'none', 200);
                };

                setTimeout(() => {
                    element.style.width = '0px';
                    element.style.padding = '0px';

                    setTimeout(() => {
                        element.style.display = 'none';
                        this.setComponent('nothing');
                    }, 1000);
                }, 1000);
            }
            else
            {
                element.style.padding = '0px';
                element.style.width = '0px';
                element.style.display = 'flex';
                
                setTimeout(() => {
                    element.style.padding = '20px 10px';
                    element.style.width = '500px';

                    setTimeout(() => {
                        for(const child of children) {
                            child.style.display = 'block';
                            setTimeout(() => child.style.opacity = '1', 200);
                        };
                    }, 1000);
                }, 1000);
            }
        }, 100);

        e.preventDefault();
    };
};

export default Handler;