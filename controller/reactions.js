"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_likes = exports.like_post = void 0;
const post_1 = __importDefault(require("../model/post"));
// LIKE A PUBLISHED ARTICLE.
const like_post = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    // grab the id of the post 
    const postId = request.params.postId;
    try {
        // fetch post from db
        const post = yield post_1.default.findOne({ _id: postId });
        if (!post)
            response.status(401).json("No article was found...");
        // if there is a post with that postId
        // set the changes
        // also check if request.user is avail
        if (request.user) {
            // check if post exist by grabing from the database 
            const like_data = {
                user: request.user,
            };
            // add to the likes
            post.reactions.likes.unshift(like_data);
            // save update to the collections 
            yield post.save();
            // return response and updated post 
            response.status(200).json(post.reactions.likes);
            // console 
            console.log(post.reactions.likes);
        }
    }
    catch (error) {
        console.log(error);
        response.status(500).json("Server Error ");
    }
});
exports.like_post = like_post;
// get all comments
const get_likes = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    // grab posts id
    const postId = request.params.postId;
    try {
        // grab post
        const post = yield post_1.default.findOne({ _id: postId }).sort("-1");
        // check for errors
        if (!post)
            response.status(400).json("There was an un-expected error");
        // check if empty
        if (post.reactions.likes && post.reactions.likes.length === 0) {
            response.status(200).json("There are no comment for this post...");
        }
        else {
            response.status(200).json(post.reactions.likes);
        }
    }
    catch (error) {
        console.log(error);
        response.status(500).json("There was an error fetching comments");
    }
});
exports.get_likes = get_likes;
