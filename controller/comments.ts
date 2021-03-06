// import modules
import Comment from "../model/comment";
import Post from "../model/post";
import User from "../model/user";
import { Request, response, Response } from "express";


// create new comment
const create_comment = async (request: Request, respone: Response) => {
    // grab posts id
    const postId = <string>request.params.postId;

    // grab comment object from the body
    const { comment } = request.body;

    try {
        // check if the post exist 
        const post_exists = await Post.findOne({ _id: postId })

        const userExist = await User.findOne({_id: request.user}).select("name")

        if (!post_exists && !userExist) respone.status(400).json("Invalid Request");



        // create a comment object
        // check if the user is logged in 
        if (post_exists && userExist) {


            const comment_structure = {
                comment,
                user: userExist,
                post: post_exists._id,
            }
    
            // submit request 
            const new_comment = await Comment.create(comment_structure);
    
            // send reponse
            respone.status(200).json(new_comment);
        }
       
    } catch (error) {
        console.log(error);
        response.status(500).json("There was an error creating a comment")
    }
}

// get all comments
const get_comments = async (request: Request, response: Response) => {


    // grab posts id
    const postId = <string>request.params.postId;

    try {
        // grab comments
        const comments = await Comment.find({ post: postId }).sort("-1").populate("user");

        // check for errors
        if (!comments) response.status(400).json("There was an un-expected error");

       
        response.status(200).json(comments);

    } catch (error) {
        console.log(error);
        response.status(500).json("There was an error fetching comments")
    }
}

export { get_comments, create_comment }