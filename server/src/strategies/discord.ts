import passport from "passport";
import axios from "axios";

import { Profile, Strategy } from "passport-discord";
import { VerifyCallback } from 'passport-oauth2';

import { AuthUser } from "types/user.types";

import database from '../database/schema/user.schema';
import discordDatabase from '../database/schema/discord-user.schema';

class Passport {
    private _passport = passport;

    constructor() {
        this.init();
    };
    
    private init = () => {
        this._passport.serializeUser((user: any, done) => {
            return done(null, user.id);
        }); 

        this._passport.deserializeUser(async (id: string, done) => {
            try {
                const user = await database.findById(id);

                return user
                    ? done(null, user)
                    : done(null, null);
            } catch (err) {
                console.error(err);
            
                return done(err, null);  
            };
        });

        this._passport.use(new Strategy({
            clientID: process.env.DISCORD_ID!,
            clientSecret: process.env.DISCORD_SECRET!,
            callbackURL: process.env.DISCORD_CALLBACK_URL,
            scope: ['identify', 'email', 'guilds']
            }, async (
                    accessToken: string,
                    refreshToken: string,
                    profile: Profile,
                    done: VerifyCallback
                ) => {
                    const { id: discordId } = profile;

                    try {
                        const existingUser = await database.findOneAndUpdate(
                            { discordId },
                            { accessToken, refreshToken },
                            { new: true },
                        );
        
                        const authUser = (await axios.get<AuthUser>(`https://discord.com/api/v9/users/@me`, {
                            headers: { Authorization: `Bearer ${accessToken}` }
                        })).data;

                        const user = {
                            username: authUser.username,
                            global_name: authUser.global_name,
                            avatar_url: authUser.avatar
                                ? `https://cdn.discordapp.com/avatars/${authUser.id}/${authUser.avatar}.png`
                                : undefined
                        };

                        await discordDatabase.findOneAndUpdate(
                            { id: discordId }, user,
                            { new: true }
                        );

                        if(existingUser) return done(null, existingUser);
            
                        const newUser = new database({ discordId, accessToken, refreshToken });

                        (await discordDatabase.create(user)).save();

                        const savedUser = await newUser.save();

                        return done(null, savedUser);
                    }
                    catch (err) {
                        console.error(err);

                        return done(err as any, undefined)
                    };
                }
        ));
    };

    public initialize = () => {
        return this._passport.initialize();
    };
    
    public session = () => {
        return this._passport.session();
    };

    get passport () {
        return this._passport;
    };
};

export default Passport;