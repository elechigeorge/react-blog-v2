"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.protect = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const user_1 = __importDefault(require("../model/user"));
const protect = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    //Get the jwt token from the head
    const token = request.headers["token"];
    let decoded;
    //Try to validate the token and get data
    try {
        // check if the token is there
        if (!token)
            response.status(400).json("Please login/register an account...");
        // GET DECODED VALUES
        decoded = jwt.verify(token, process.env.JWT_TOKEN);
        // GET AUTHORIZED USER FULL DETAILS
        const authUser = yield user_1.default.findOne({ _id: decoded.id });
        // SET LOGGED IN USER DETAILS TO REQUEST OBJECT
        request.user = authUser;
        // move on to the next middleware
        next();
    }
    catch (error) {
        //If token is not valid, respond with 401 (unauthorized)
        console.log(error);
        response.status(401).json("Invalid Request...");
        return;
    }
});
exports.protect = protect;
