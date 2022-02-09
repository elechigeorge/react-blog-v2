"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// initialize express router
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// import controller for user registration
const post_1 = require("../controller/post");
const authorization_1 = require("../middleware/authorization");
router.route("/").post(authorization_1.protect, post_1.create_article);
router.route("/").get(post_1.get_articles);
router.route("/:id").get(post_1.get_single_article);
exports.default = router;
