"use strict";
exports.__esModule = true;
// initialize express router
var express_1 = require("express");
var authorization_1 = require("../middleware/authorization");
var router = express_1["default"].Router();
// import controller for user registration
var reactions_1 = require("../controller/reactions");
router.route("/like/:postId").post(authorization_1.protect, reactions_1.like_post);
router.route("/like/:postId").get(authorization_1.protect, reactions_1.get_likes);
// router.route("/:postId").get(protect, get_comments);
exports["default"] = router;
