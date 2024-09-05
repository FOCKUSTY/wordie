import { GetServerSidePropsContext } from "next";
import { ReactElement, useState } from "react";

import UserApi from "@/api/user.api";

import OnclickComponentHandler from "@/utility/handlers/play/onclick-component.handler";
import type { NextPageWithLayout } from "@/utility/types/component.types";
import type { User } from '@/utility/types/user.types';
import type { Reply } from "@/utility/types/play/reply.type";

import State from "@/api/functions.api";

import SectionComponent from '@/ui/play/sections.components';
import GameComponent from '@/ui/play/game.components';
import Layout from "@/ui/layout.ui";

import styles from '../../styles/play/play.module.css';

type Props = {
    user: User
};

const Page: NextPageWithLayout<Props> = ({ user }) => {
    let [ component, setComponent ] = useState<'rules'|'nothing'>('nothing');
    let [ game, setGame ] = useState<boolean>(false);
    const [ replies, setReplies, setter ] = new State<Reply[]>([]).getState();

    const onclickComponentHandler = new OnclickComponentHandler(setComponent, styles);

    return (
        <div className="page">
            <main id={styles.main}>
                {
                    component !== 'nothing'
                        ? <SectionComponent set={setComponent} styles={styles} section={component}/>
                        : <></>
                }

                <section className={styles.content}>
                    <div className={styles.components}>
                        <button onClick={(e) => onclickComponentHandler.Handler(e, 'rules')}>
                            <span>Вывести правила</span>
                        </button>
                    </div>

                    <GameComponent
                        game={game}
                        set={setGame}
                        styles={styles}
                        user={user}
                        replies={replies}
                        setReplies={setReplies}
                        setter={setter}
                    />
                </section>
            </main>
        </div>
    );
};

Page.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const user = await new UserApi().getUser(ctx);
    
    return { props: { user } };
};

export default Page;