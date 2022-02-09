"use strict";
exports.__esModule = true;
// initialize express router
var express_1 = require("express");
var router = express_1["default"].Router();
// import controller for user registration
var user_1 = require("../controller/user");
router.route("/").post(user_1.login);
exports["default"] = router;
