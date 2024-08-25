import mongoose, { Schema } from "mongoose";
import { PassportUser } from "../../types/user.types";

const schema = new Schema<PassportUser>({
    discordId: {
        type: mongoose.SchemaTypes.String,
        require: true,
        unique: true,
    },
    
    accessToken: {
        type: mongoose.SchemaTypes.String,
        require: true
    },
    
    refreshToken: {
        type: mongoose.SchemaTypes.String,
        require: true
    },
});

const database = mongoose.model('auth-users', schema);

export default database;