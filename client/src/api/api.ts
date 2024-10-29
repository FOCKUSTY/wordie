import config from "../../config.json";
import { GetServerSidePropsContext } from "next";

class Api {
	public readonly env = process.env;
	public readonly url = `${config.server_url}/api`;
	public readonly client_url = `${config.client_url}`;

	public readonly validateCookies = (ctx?: GetServerSidePropsContext) => {
		if (!ctx) return false;

		const sessionID = ctx.req.cookies["connect.sid"];

		return sessionID ? { Cookie: `connect.sid=${sessionID}` } : false;
	};
}

export default Api;
