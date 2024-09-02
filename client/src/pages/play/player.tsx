import { GetServerSidePropsContext } from "next";
import { ReactElement } from "react";

import { useRouter } from "next/navigation";

import UserApi from "@/api/user.api";

import type { NextPageWithLayout } from "@/utility/types/component.types";
import type { User } from '@/utility/types/user.types';

import Layout from "@/ui/layout.ui";

import styles from '../../styles/play/play.module.css';

type Props = {
    user: User
};

const Page: NextPageWithLayout<Props> = ({ user }) => {
    return (
        <div className="page">
            <main id={styles.main}>
                <span>В разработке</span>
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