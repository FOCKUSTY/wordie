import { MouseEvent as ReactMouseEvent } from "react";

import type { Component } from "@/utility/types/play/component.type";

let lastComponent: Component = 'nothing';

class Handler {
    private readonly setComponent: (component: Component) => void;
    private readonly styles: any;

    constructor(set: (component: Component) => void, styles: any) {
        this.setComponent = set;
        this.styles = styles;
    };
    
    private readonly ShowChildren = (children: any[]) => {
        setTimeout(() => {
            for(const child of children) {
                child.style.display = 'block';
                setTimeout(() => child.style.opacity = '1', 200);
            };
        }, 1000);
    };

    private readonly HideChildren = (children: any[], transition: boolean = true) => {
        for(const child of children) {
            child.style.opacity = '0';
            transition === true
                ? setTimeout(() => child.style.display = 'none', 200)
                : child.style.display = 'none';
        };
    };

    private readonly AnimationShow = (element: any, children: any[]) => {
        element.style.margin = '20px 0px';
        element.style.padding = '0px';
        element.style.width = '0px';
        element.style.display = 'flex';
        
        setTimeout(() => {
            element.style.margin = '20px';
            element.style.padding = '20px 10px';
            element.style.width = '500px';

            this.ShowChildren(children);
        }, 1000);
    };

    private readonly AnimationHide = (element: any, children: any[], component: Component) => {
        this.HideChildren(children);

        setTimeout(() => {
            element.style.width = '0px';
            element.style.padding = '0px';
            element.style.margin = '20px 0px';

            setTimeout(() => {
                this.setComponent(component);
            }, 1000);
        }, 1000);
    };

    public readonly Handler = (e: ReactMouseEvent<HTMLElement, MouseEvent>, component: Component) => {
        const document = e.currentTarget.ownerDocument;

        if(lastComponent === component)
            return;

        if(component !== 'nothing')
            this.setComponent(component);

        if(lastComponent !== 'nothing' && component !== 'nothing')
        {
            const el = document.getElementById(this.styles.section_component);
            const ch: any = el?.children;

            if(!el || !ch)
                return;

            this.HideChildren(ch, false);
        };

        lastComponent = component;

        setTimeout(() => {
            const element = document.getElementById(this.styles.section_component);
            const children: any = element?.children;

            if(!element || !children)
                return;
    
            for(const child of children)
            {
                child.className = `${child.className} ${this.styles.child}`;
                child.style.opacity = '0';
            };

            if(component === 'nothing')
            {
                this.AnimationHide(element, children, component);
            }
            else
            {
                this.AnimationShow(element, children);
            };
        }, 1);

        e.preventDefault();
    };
};

export default Handler;