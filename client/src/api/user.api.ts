import { GetServerSidePropsContext } from "next";
import Api from "./api";

const api = new Api();

class UserApi {
	public getUser = async (ctx: GetServerSidePropsContext) => {
		const headers = api.validateCookies(ctx);

		if (!headers) return null;

		try {
			const res = await fetch(`${api.url}/users/user`, { headers: headers });
			const user = await res.json();

			return user;
		} catch (err) {
			console.error(err);

			return null;
		}
	};
}

export default UserApi;
