"use strict";
exports.__esModule = true;
// initialize express router
var express_1 = require("express");
var router = express_1["default"].Router();
// import controller for user registration
var post_1 = require("../controller/post");
var authorization_1 = require("../middleware/authorization");
router.route("/").post(authorization_1.protect, post_1.create_article);
router.route("/").get(post_1.get_articles);
router.route("/:id").get(post_1.get_single_article);
exports["default"] = router;
