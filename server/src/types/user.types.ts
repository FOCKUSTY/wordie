export interface User {
    id: string;
    username: string;

    avatar_url?: string;
    global_name?: string;
}

export interface PassportUser {
    id: string,

    discordId: string,
    accessToken: string,
    refreshToken: string
};