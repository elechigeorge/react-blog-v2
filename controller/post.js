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
exports.get_single_article = exports.get_articles = exports.create_article = void 0;
// import modules
var post_1 = require("../model/post");
// get all posts records
var get_articles = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var Article, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, post_1["default"].find({}).sort("-1").populate("user").select("-password")];
            case 1:
                Article = _a.sent();
                if (!Article)
                    response.status(400).json("Bad Request");
                response.status(200).json(Article);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error("an error occured, check the server " + error_1);
                response.status(500).json("Error while fetching articles...");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.get_articles = get_articles;
// get single article
var get_single_article = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var objectId, Article, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                objectId = request.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, post_1["default"].findOne({ _id: objectId }).populate("user").select("-password")];
            case 2:
                Article = _a.sent();
                // check for any errors
                if (!Article) {
                    response.status(400).json("Bad request");
                    return [2 /*return*/];
                }
                // return result if request successess 
                response.status(200).json(Article);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.log(error_2);
                response.status(500).json("There was an error fetching resources...");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.get_single_article = get_single_article;
// create a new article
var create_article = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, images, title, body, article, new_article, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.body, images = _a.images, title = _a.title, body = _a.body;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                article = {
                    user: request.user,
                    images: images,
                    title: title,
                    body: body
                };
                return [4 /*yield*/, post_1["default"].create(article)];
            case 2:
                new_article = _b.sent();
                // check for errors
                if (!new_article) {
                    response.status(400).json("error occured... check your request body properly...");
                }
                // send response for success
                response.status(200).json(new_article);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _b.sent();
                console.log(error_3);
                response.status(500).json("A error occured during article creation...");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.create_article = create_article;
