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
const reactions_1 = require("../controller/reactions");
router.route("/like/:postId").post(authorization_1.protect, reactions_1.like_post);
router.route("/like/:postId").get(authorization_1.protect, reactions_1.get_likes);
// router.route("/:postId").get(protect, get_comments);
exports.default = router;
