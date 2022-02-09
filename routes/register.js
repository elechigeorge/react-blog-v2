"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// initialize express router
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// import controller for user registration
const user_1 = require("../controller/user");
router.route("/").post(user_1.register);
exports.default = router;