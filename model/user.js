"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
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
});
const User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
