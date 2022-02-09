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
exports.create_comment = exports.get_comments = void 0;
// import modules
const comment_1 = __importDefault(require("../model/comment"));
const post_1 = __importDefault(require("../model/post"));
const user_1 = __importDefault(require("../model/user"));
const express_1 = require("express");
// create new comment
const create_comment = (request, respone) => __awaiter(void 0, void 0, void 0, function* () {
    // grab posts id
    const postId = request.params.postId;
    // grab comment object from the body
    const { comment } = request.body;
    try {
        // check if the post exist 
        const post_exists = yield post_1.default.findOne({ _id: postId });
        const userExist = yield user_1.default.findOne({ _id: request.user }).select("name");
        if (!post_exists && !userExist)
            respone.status(400).json("Invalid Request");
        // create a comment object
        // check if the user is logged in 
        if (post_exists && userExist) {
            const comment_structure = {
                comment,
                user: userExist,
                post: post_exists._id,
            };
            // submit request 
            const new_comment = yield comment_1.default.create(comment_structure);
            // send reponse
            respone.status(200).json(new_comment);
        }
    }
    catch (error) {
        console.log(error);
        express_1.response.status(500).json("There was an error creating a comment");
    }
});
exports.create_comment = create_comment;
// get all comments
const get_comments = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    // grab posts id
    const postId = request.params.postId;
    try {
        // grab comments
        const comments = yield comment_1.default.find({ post: postId }).sort("-1").populate("user");
        // check for errors
        if (!comments)
            response.status(400).json("There was an un-expected error");
        response.status(200).json(comments);
    }
    catch (error) {
        console.log(error);
        response.status(500).json("There was an error fetching comments");
    }
});
exports.get_comments = get_comments;
