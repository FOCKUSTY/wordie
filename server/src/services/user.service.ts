import database from "../database/schema/discord-user.schema";

class UserService {
    public getUser = async (discordId: string) => {
        const user = await database.findOne({discordId});

        if(!user)
            return null;

        return {
            id: user.id,
            username: user.username,
            avatarUrl: user.avatar_url,
            globalName: user.global_name
        };
    };
};

export default UserService;