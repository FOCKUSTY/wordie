import Switcher from "@/ui/switch.component";

import styles from "../styles/layout.module.css";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div id="layout" className={styles.layout}>
            <header id={styles.header}>
                <div className={styles.header_center}>
                    <div className={`${styles.title} noselect`}>
                        <div className={styles.links}>
                            <a target="_blank" href="https://github.com/FOCKUSTY/wordie">Github</a>
                            <a target="_blank" href="https://discord.gg/5MJrRjzPec">Discord</a>
                            <a target="_blank" href="https://t.me/BottomlessHat">Telegram</a>
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
                    <div className={styles.rights}>
                        <h2>The Void</h2>
                        <span>© 2024 FOCKUSTY</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;