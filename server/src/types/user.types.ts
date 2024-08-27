export interface User {
    id: string;
    username: string;

    avatar_url?: string;
    global_name?: string;
}

export interface AuthUser {
    id: string,
    username: string,
    avatar?: string,
    discriminator: string,
    public_flags: number,
    flags: number,
    banner?: string,
    accent_color: number,
    global_name?: string,
    banner_color: string,
    locale: string,
    verified: boolean
};

export interface PassportUser {
    id: string,

    discordId: string,
    accessToken: string,
    refreshToken: string
};