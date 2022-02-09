"use strict";
exports.__esModule = true;
var jsonwebtoken_1 = require("jsonwebtoken");
var generateToken = function (id) {
    return jsonwebtoken_1["default"].sign({ id: id }, process.env.JWT_TOKEN, { expiresIn: "6d" });
};
exports["default"] = generateToken;
