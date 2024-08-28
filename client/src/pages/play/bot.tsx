import { GetServerSidePropsContext } from "next";
import { ReactElement, useState } from "react";

import { useRouter } from "next/navigation";

import UserApi from "@/api/user.api";

import OnclickHandler from "@/utility/handlers/play/onclick-component.handler";
import type { NextPageWithLayout } from "@/utility/types/component.types";
import type { User } from '@/utility/types/user.types';

import SectionComponent from '@/ui/play/sections.components';
import UserComponent from "@/ui/user.components";
import Layout from "@/ui/layout.ui";

import styles from '../../styles/play/play.module.css';

type Props = {
    user: User
};

const Page: NextPageWithLayout<Props> = ({ user }) => {
    let [ component, setComponent ] = useState<'rules'|'history'|'nothing'>('nothing');

    const onclickHandler = new OnclickHandler(setComponent, styles);

    return (
        <div className="page">
            <main id={styles.main}>

                {
                    component !== 'nothing'
                        ? <SectionComponent set={setComponent} styles={styles} section={component}></SectionComponent>
                        : <></>
                }

                <section className={styles.content}>
                    <div className={styles.components}>
                        <button onClick={(e) => onclickHandler.Handler(e, 'rules') }>
                            <span>Вывести правила</span>
                        </button>
                        
                        <button onClick={(e) => onclickHandler.Handler(e, 'history') }>
                            <span>Вывести историю</span>
                        </button>
                    </div>

                    <div className={styles.start_game}>
                        <UserComponent styles={styles} user={user}></UserComponent>
                        
                        <div className={styles.buttons}>
                            <button>
                                <span>Начать игру</span>
                            </button>
                        </div>
                    </div>
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