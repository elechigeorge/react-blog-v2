"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// initialize express router
const express_1 = __importDefault(require("express"));
const authorization_1 = require("../middleware/authorization");
const router = express_1.default.Router();
// import controller for user registration
const comments_1 = require("../controller/comments");
router.route("/:postId").post(authorization_1.protect, comments_1.create_comment);
router.route("/:postId").get(authorization_1.protect, comments_1.get_comments);
exports.default = router;
