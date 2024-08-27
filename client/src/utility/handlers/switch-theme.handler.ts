import { ChangeEvent } from "react";

class SwitchThemeHandler {
    private _vars: any = {
        '--foreground-rgb': { dark: '255, 255, 255', light: '0, 0, 0;' },
        '--background-start-rgb': { dark: '0, 0, 0', light: '214, 219, 220' },
        '--background-end-rgb': { dark: '0, 0, 0', light: '255, 255, 255' },
     
        '--text-color': { dark: '#efefef', light: '#414141' },
        '--text-anti-color': { dark: '#414141', light: '#efefef' },
        
        '--main-color': { dark: '#16191d', light: '#ffffff' },
        '--main-shadow': { dark: '#16191d', light: '#efefef' }
    };

    public Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const document = event.target.ownerDocument;
        const html = document.querySelector('html');
    
        if(!html) return;

        const switchTheme = (theme: 'dark'|'light') => {
            html.style.cssText = `color-scheme: ${theme}`;
    
            for(const key in this._vars) {
                const value = this._vars[key];
    
                document.documentElement.style.setProperty(key, value[theme]);
            };
    
            html.style.colorScheme = theme;
        };
    
        if(!event.target.checked || html.style.colorScheme === 'dark')
            switchTheme('light');
        else
            switchTheme('dark');
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

export default SwitchThemeHandler;