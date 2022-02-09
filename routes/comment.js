"use strict";
exports.__esModule = true;
// initialize express router
var express_1 = require("express");
var authorization_1 = require("../middleware/authorization");
var router = express_1["default"].Router();
// import controller for user registration
var comments_1 = require("../controller/comments");
router.route("/:postId").post(authorization_1.protect, comments_1.create_comment);
router.route("/:postId").get(authorization_1.protect, comments_1.get_comments);
exports["default"] = router;
