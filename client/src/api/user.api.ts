import { GetServerSidePropsContext } from "next"
import { API_URL, validateCookies } from "./api";

class UserApi {
    public getUser = async (ctx: GetServerSidePropsContext) => {
        const headers = validateCookies(ctx);

        if(!headers)
            return null
        
        try {
            const res = await fetch(`${API_URL}/users/user`, { headers: headers });
            const user = await res.json();

            return user;
        }
        catch (err) {
            console.error(err);
            
            return null
        };
    };
};

export default UserApi;