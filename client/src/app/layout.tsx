import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../styles/globals.css";
import styles from "../styles/layout.module.css";
import Switcher from "@/ui/switch.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Wordie",
    description: "Simple game",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="ru">
            <body>
                <div id="layout" className={styles.layout}>
                    <header id={styles.header}>
                        <div className={styles.header_center}>
                            <div className={`${styles.title} noselect`}>
                                <div className={styles.links}>
                                    <a href="https://github.com/FOCKUSTY/wordie">Github</a>
                                    <a href="https://discord.gg/5MJrRjzPec">Discord</a>
                                    <a href="https://t.me/BottomlessHat">Telegram</a>
                                </div>
                                <h1 id={styles.h1}>Wordie</h1>
                            </div>
                        </div>

                        <Switcher id="swtich" className={styles.switcher}></Switcher>
                    </header>

                    <>{children}</>

                    <footer id={styles.footer}>
                        <div className={`${styles.title} noselect`}>
                            <img src="/TheVoid.BLACK.png" alt="the void logo" />
                            <h2>The Void</h2>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;