import { ReactElement } from "react";

import '../../styles/layout.css'

const Layout = ({ children }: { children: ReactElement }) => {
    return (
        <div className="layout">
            <header>
                <div className="title noselect">
                    <div className="links">
                        <a href="https://github.com/FOCKUSTY/wordie">Github</a>
                        <a href="https://discord.gg/5MJrRjzPec">Discord</a>
                        <a href="https://t.me/BottomlessHat">Telegram</a>
                    </div>
                    <h1>Wordie</h1>
                </div>
            </header>

            <>{children}</>

            <footer>
                <div className="title noselect">
                    <img src="/TheVoid.BLACK.png" alt="the void logo" />
                    <h2>The Void</h2>
                </div>
            </footer>
        </div>
    );
};

export default Layout;