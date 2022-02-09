"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1["default"].Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        "default": "student"
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
        "default": Date.now
    },
    token: {
        type: String
    }
});
var User = mongoose_1["default"].model("User", UserSchema);
exports["default"] = User;
