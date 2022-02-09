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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.create_comment = exports.get_comments = void 0;
// import modules
var comment_1 = require("../model/comment");
var post_1 = require("../model/post");
var user_1 = require("../model/user");
var express_1 = require("express");
// create new comment
var create_comment = function (request, respone) { return __awaiter(void 0, void 0, void 0, function () {
    var postId, comment, post_exists, userExist, comment_structure, new_comment, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                postId = request.params.postId;
                comment = request.body.comment;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, post_1["default"].findOne({ _id: postId })];
            case 2:
                post_exists = _a.sent();
                return [4 /*yield*/, user_1["default"].findOne({ _id: request.user }).select("name")];
            case 3:
                userExist = _a.sent();
                if (!post_exists && !userExist)
                    respone.status(400).json("Invalid Request");
                if (!(post_exists && userExist)) return [3 /*break*/, 5];
                comment_structure = {
                    comment: comment,
                    user: userExist,
                    post: post_exists._id
                };
                return [4 /*yield*/, comment_1["default"].create(comment_structure)];
            case 4:
                new_comment = _a.sent();
                // send reponse
                respone.status(200).json(new_comment);
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                console.log(error_1);
                express_1.response.status(500).json("There was an error creating a comment");
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.create_comment = create_comment;
// get all comments
var get_comments = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var postId, comments, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                postId = request.params.postId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, comment_1["default"].find({ post: postId }).sort("-1").populate("user")];
            case 2:
                comments = _a.sent();
                // check for errors
                if (!comments)
                    response.status(400).json("There was an un-expected error");
                response.status(200).json(comments);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.log(error_2);
                response.status(500).json("There was an error fetching comments");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.get_comments = get_comments;
