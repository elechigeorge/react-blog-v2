import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import User from "../model/user";



declare module 'express-serve-static-core' {
    interface Request {
        user: ({}) => Request;
    }
}

const protect = async (request: Request, response: Response, next: NextFunction) => {

  //Get the jwt token from the head
  const token = <string>request.headers["token"];
  let decoded;
  
  //Try to validate the token and get data
  try {
    // check if the token is there
    if(!token) response.status(400).json("Please login/register an account...");

    // GET DECODED VALUES
    decoded = <any>jwt.verify(token, <string>process.env.JWT_TOKEN);

    // GET AUTHORIZED USER FULL DETAILS
    const authUser = await User.findOne({_id: decoded.id});


    // SET LOGGED IN USER DETAILS TO REQUEST OBJECT
    request.user = authUser;

    // move on to the next middleware
    next();
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    console.log(error);
    response.status(401).json("Invalid Request...");
    return;
  }
};

export { protect };
