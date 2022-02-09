"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var PostSchema = new mongoose_1["default"].Schema({
    user: {
        type: mongoose_1["default"].Schema.Types.ObjectId,
        ref: "User"
    },
    images: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String
    },
    date: {
        type: Date,
        "default": Date.now
    },
    reactions: {
        likes: [
            {
                user: {
                    type: mongoose_1["default"].Schema.Types.ObjectId
                }
            }
        ],
        dislikes: [
            {
                user: {
                    type: mongoose_1["default"].Schema.Types.ObjectId
                }
            }
        ]
    }
});
var Post = mongoose_1["default"].model("Post", PostSchema);
exports["default"] = Post;
