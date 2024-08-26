import { ChangeEvent } from "react";

class SwitchTemeHandler {
    private _vars: any = {
        '--foreground-rgb': { dark: '255, 255, 255', light: '0, 0, 0;' },
        '--background-start-rgb': { dark: '0, 0, 0', light: '214, 219, 220' },
        '--background-end-rgb': { dark: '0, 0, 0', light: '255, 255, 255' },
     
        '--text-color': { dark: 'white', light: 'black' },
        '--text-anti-color': { dark: 'black', light: 'white' },
        
        '--main-color': { dark: '#16191d', light: '#929292' },
        '--main-shadow': { dark: '#16191d', light: '#929292' }
    };

    public Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const document = event.target.ownerDocument;
        const html = document.querySelector('html');
    
        if(!html) return;

        const switchTeme = (teme: 'dark'|'light') => {
            html.style.cssText = `color-scheme: ${teme}`;
    
            for(const key in this._vars) {
                const value = this._vars[key];
    
                document.documentElement.style.setProperty(key, value[teme]);
            };
    
            html.style.colorScheme = teme;
        };
    
        if(!event.target.checked || html.style.colorScheme === 'dark')
            switchTeme('light');
        else
            switchTeme('dark');
    };

    public OnLoad = (id: string) => {
        const document = window.document;
        const html = document.querySelector('html');
        const inputElement: any = document.querySelector(`#${id}`);

        if(!html || !inputElement) return;
        
        if(html.style.colorScheme === 'dark')
            inputElement.checked = false;
        else
            inputElement.checked = true;
    };
};

export default SwitchTemeHandler;