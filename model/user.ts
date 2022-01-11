import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        default: "student"
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    occupation: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    token: {
        type: String
    }
})


const User = mongoose.model("User", UserSchema);

export default User;
