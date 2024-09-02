import { GetServerSidePropsContext } from "next";
import { ReactElement } from "react";

import { useRouter } from "next/navigation";

import { NextPageWithLayout } from "@/utility/types/component.types";
import { User } from '@/utility/types/user.types';

import UserContext from "@/context/user.context";
import UserApi from "@/api/user.api";

import UserComponent from "@/ui/user.components";
import AuthComponent from "@/ui/auth.components";
import Layout from "@/ui/layout.ui";

import styles from "@/styles/home.module.css";

type Props = {
    user?: User
};

const Home: NextPageWithLayout<Props> = ({ user }) => {
    const router = useRouter();

    new UserContext().setContext(user);

    return (
        <div className="page">
            <main id={styles.main}>
                <div className={styles.rules}>
                    <ul>
                        <li>Количество человек: от двух</li>
                        <li>Начало игры: Какой-либо из людей начинает ход, загадывая любое слово</li>
                        <li>Слово должно являться: Существительным именительного падежа в единственном числе любого склонения и любого рода</li>
                        <li>ИСКЛЮЧЕНИЕ: Если данного слова нет в единственном числе, то можно написать во множественном числе</li>
                        <li>После того, как первый человек назвал свое слово, нужно посмотреть на какую букву оно заканчиваться</li>
                        <li>Когда мы узнали последюю букву, следующий человек (По договоренности группы людей) говорит свое слово, которое обязано начинаться на последнюю букву прошлого слов</li>
                        <li>ГЛАВНОЕ, чтобы слова не повторялись, иначе это не будет защитано, как ответ. КАЖДОЕ слово должно быть УНИКАЛЬНЫМ</li>
                        <li>ЕСЛИ последняя буква это: Ь, Ъ или Ы, ТО нужно выбрать предпоследнюю букву</li>
                        <li>ЕСЛИ вы не можете придумать слова на последнюю буквы, вы ОБЯЗАНЫ спросить у группы людей/человека, играющих с вами поменять букву на предпоследнюю</li>
                        <li>Игра расчитано на веселую и долгую игру, выбыть нельзя, если вы еще можете придумывать слова</li>
                    </ul>
                </div>

                <div className={`${styles.nav} noselect`}>
                    <UserComponent styles={styles} user={user}></UserComponent>
                    <AuthComponent styles={styles} user={user} router={router}></AuthComponent>
                </div>
            </main>
        </div>
    );
};

Home.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};

export class StaticProps {
    public readonly server_url = process.env.SERVER_URL;
    public readonly client_url = process.env.CLIENT_URL;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const user = await new UserApi().getUser(ctx);
    
    return { props: { user } };
};

export default Home;