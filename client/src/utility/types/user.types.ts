export interface User {
    id: string;
    username: string;

    avatarUrl?: string;
    globalName?: string;
}

export interface PassportUser {
    id: string,

    discordId: string,
    accessToken: string,
    refreshToken: string
};