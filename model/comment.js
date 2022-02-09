"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var CommentSchema = new mongoose_1["default"].Schema({
    comment: {
        type: String
    },
    date: {
        type: Date,
        "default": Date.now
    },
    user: {
        type: mongoose_1["default"].Schema.Types.ObjectId,
        ref: "User"
    },
    post: {
        type: mongoose_1["default"].Schema.Types.ObjectId,
        ref: "Post"
    }
});
var Comment = mongoose_1["default"].model("Comment", CommentSchema);
exports["default"] = Comment;
