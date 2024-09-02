import { config } from 'dotenv';
import { GetServerSidePropsContext } from 'next';
 
config();

class Api {
    public readonly env = process.env;
    public readonly url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api`;

    public readonly validateCookies = (ctx: GetServerSidePropsContext) => {
        const sessionID = ctx.req.cookies['connect.sid'];
    
        return sessionID
            ? ({ Cookie: `connect.sid=${sessionID}` })
            : false;
    };
};

export default Api;