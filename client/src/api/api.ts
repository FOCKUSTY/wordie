import { GetServerSidePropsContext } from 'next';
import config from '../../config.json';

export const API_URL: string = `${config.server_url}/api`;

export const validateCookies = (ctx: GetServerSidePropsContext) => {
    const sessionID = ctx.req.cookies['connect.sid'];

    return sessionID
        ? ({ Cookie: `connect.sid=${sessionID}` })
        : false;
};