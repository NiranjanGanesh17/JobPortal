import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    uid:{
type:String
    },
    userName: {
        type: String,
    },
    role: {
        type: String,
        default:'jobseeker'
    }
});

export const User = mongoose.model("users", userSchema);
