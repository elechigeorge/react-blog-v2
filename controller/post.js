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
exports.get_single_article = exports.get_articles = exports.create_article = void 0;
// import modules
const post_1 = __importDefault(require("../model/post"));
// get all posts records
const get_articles = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // grab all articles
        const Article = yield post_1.default.find({}).sort("-1").populate("user").select("-password");
        if (!Article)
            response.status(400).json("Bad Request");
        response.status(200).json(Article);
    }
    catch (error) {
        console.error("an error occured, check the server " + error);
        response.status(500).json("Error while fetching articles...");
    }
});
exports.get_articles = get_articles;
// get single article
const get_single_article = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const objectId = request.params.id;
    try {
        // try to get specific article details
        const Article = yield post_1.default.findOne({ _id: objectId }).populate("user").select("-password");
        // check for any errors
        if (!Article) {
            response.status(400).json("Bad request");
            return;
        }
        // return result if request successess 
        response.status(200).json(Article);
    }
    catch (error) {
        console.log(error);
        response.status(500).json("There was an error fetching resources...");
    }
});
exports.get_single_article = get_single_article;
// create a new article
const create_article = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    // grabs user submission objects 
    const { images, title, body } = request.body;
    try {
        // create a new article object 
        const article = {
            user: request.user,
            images,
            title,
            body
        };
        // submit created article
        const new_article = yield post_1.default.create(article);
        // check for errors
        if (!new_article) {
            response.status(400).json("error occured... check your request body properly...");
        }
        // send response for success
        response.status(200).json(new_article);
    }
    catch (error) {
        console.log(error);
        response.status(500).json("A error occured during article creation...");
    }
});
exports.create_article = create_article;
