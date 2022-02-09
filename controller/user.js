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
exports.register = exports.login = void 0;
const user_1 = __importDefault(require("../model/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generateToken_1 = __importDefault(require("../utility/generateToken"));
// register new user
const register = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // distructure request object
        const { image, name, email, password, occupation } = request.body;
        // check if user filed all the inputs
        if (!image && !name && !email && !password && !occupation) {
            response.status(400).json("check if you have missed to enter an input correctly");
            return;
        }
        // check if user is already registered 
        const user_exist = yield user_1.default.findOne({ email: email });
        if (user_exist) {
            response.status(409).json("You already have an account, consider Logging In ");
            return;
        }
        // register a new user 
        const user = {
            image,
            name,
            email,
            password,
            occupation,
        };
        // hash the password with bcryptjs hashing algorith
        const salt = yield bcryptjs_1.default.genSalt(10);
        user.password = yield bcryptjs_1.default.hash(password, salt);
        const savedUser = yield user_1.default.create(user);
        if (savedUser) {
            // send responses 
            response.status(200).json({
                _id: savedUser._id,
                image: savedUser.image,
                name: savedUser.name,
                email: savedUser.email,
                occupation: savedUser.occupation,
                token: (0, generateToken_1.default)(savedUser._id)
            });
        }
    }
    catch (error) {
        console.log(error);
        response.status(500).json("There has been a network error, check your internet again...");
    }
});
exports.register = register;
// login a user 
const login = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // extract the body of the request
        const { email, password } = request.body;
        // check if the user entered the correct fields
        if (!email && !password) {
            response.status(400).json("Make sure you entered all fields correctly");
            return;
        }
        // check if user is registered 
        const user = yield user_1.default.findOne({ email });
        if (!user) {
            response.status(400).json("You don't have an account yet, Consider Creating an account ");
            return;
        }
        // check if password is correct
        const compare_response = yield bcryptjs_1.default.compare(password, user.password);
        // send reponse 
        if (!compare_response) {
            response.status(401).json("Invalid Password");
            return;
        }
        response.status(200).json({
            image: user.image,
            name: user.name,
            email: user.email,
            occupation: user.occupation,
            token: (0, generateToken_1.default)(user._id),
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).json("Network Server Error, check your connection and try again after a hot reload...");
    }
    next();
});
exports.login = login;
