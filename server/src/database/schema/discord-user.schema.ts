import mongoose, { Schema } from 'mongoose';
import { User } from "../../types/user.types";

const schema = new Schema<User>({
    id: {
        type: mongoose.SchemaTypes.String,
        unique: true,
        ref: "auth-users"
    },
    
    username: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    
    global_name: {
        type: mongoose.SchemaTypes.String,
        required: false
    },
    
    avatar_url: {
        type: mongoose.SchemaTypes.String,
        required: false
    },
});

const database = mongoose.model('users', schema);

export default database;