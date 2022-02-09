"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PostSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
        default: Date.now
    },
    reactions: {
        likes: [
            {
                user: {
                    type: mongoose_1.default.Schema.Types.ObjectId
                }
            }
        ],
        dislikes: [
            {
                user: {
                    type: mongoose_1.default.Schema.Types.ObjectId
                }
            }
        ]
    }
});
const Post = mongoose_1.default.model("Post", PostSchema);
exports.default = Post;
