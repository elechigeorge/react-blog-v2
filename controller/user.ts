import { NextFunction, Response, Request } from 'express';
import User from '../model/user';
import bcrypt from "bcryptjs"
import generateToken from '../utility/generateToken';


// register new user
const register = async (request: Request, response: Response, next: NextFunction) => {
    try {
        // distructure request object
        const { image, name, email, password, occupation } = request.body;

        // check if user filed all the inputs
        if (!image && !name && !email && !password && !occupation) {
            response.status(400).json("check if you have missed to enter an input correctly");
            return;
        }

        // check if user is already registered 
        const user_exist = await User.findOne({ email: email });

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
        }

        // hash the password with bcryptjs hashing algorith
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt)

        const savedUser = await User.create(user);


        if (savedUser) {
            // send responses 
            response.status(200).json({
                _id: savedUser._id,
                image: savedUser.image,
                name: savedUser.name,
                email: savedUser.email,
                occupation: savedUser.occupation,
                token: generateToken(savedUser._id)
            });
        }


    } catch (error) {
        console.log(error);
        response.status(500).json("There has been a network error, check your internet again...")
    }
}

// login a user 
const login = async (request: Request, response: Response, next: NextFunction) => {
    try {
        // extract the body of the request
        const { email, password } = request.body;

        // check if the user entered the correct fields
        if (!email && !password) {
            response.status(400).json("Make sure you entered all fields correctly");
            return;
        }

        // check if user is registered 
        const user = await User.findOne({ email });
        if (!user) {
            response.status(400).json("You don't have an account yet, Consider Creating an account ");
            return;
        }

        // check if password is correct
        const compare_response = await bcrypt.compare(password, user.password);

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
            token: generateToken(user._id),
        })

    } catch (error) {
        console.log(error);
        response.status(500).json("Network Server Error, check your connection and try again after a hot reload...");

    }

    next();
}

// export to other files
export { login, register }