import { ChangeEvent } from "react";

const vars: any = {
   '--foreground-rgb': { dark: '255, 255, 255', light: '0, 0, 0;' },
   '--background-start-rgb': { dark: '0, 0, 0', light: '214, 219, 220' },
   '--background-end-rgb': { dark: '0, 0, 0', light: '255, 255, 255' },

   '--text-color': { dark: 'white', light: 'black' },
   '--text-anti-color': { dark: 'black', light: 'white' },
   
   '--main-color': { dark: '#16191d', light: '#929292' },
   '--main-shadow': { dark: '#16191d', light: '#929292' }
};

const Switcher = (e: ChangeEvent<HTMLInputElement>) => {
    const document = e.target.ownerDocument;
    const html = document.querySelector('html');

    if(!html)
        return;

    const switchTeme = (teme: 'dark'|'light') => {
        html.style.cssText = `color-scheme: ${teme}`;

        for(const key in vars) {
            const value = vars[key];

            document.documentElement.style.setProperty(key, value[teme]);
        };

        html.style.colorScheme = teme;
    };

    if(html.style.colorScheme === 'dark') {
        switchTeme('light');
    }
    else {
        switchTeme('dark');
    };
};

export default Switcher;