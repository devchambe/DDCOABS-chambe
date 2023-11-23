import mongoose, { Schema } from "mongoose";

mongoose.Promise = global.Promise;

const usersSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },

}, { timestamps: true }
)

const Users = mongoose.models.Users || mongoose.model("Users", usersSchema);
export default Users;