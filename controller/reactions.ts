// IMPORT MODULES
import User from '../model/user';
import Post from "../model/post";
import { Request, Response } from "express";


// LIKE A PUBLISHED ARTICLE.
const like_post = async (request: Request, response: Response) => {
    // grab the id of the post 
    const postId = request.params.postId;

    try {
        // fetch post from db
        const post = await Post.findOne({_id: postId});

        if (!post) response.status(401).json("No article was found...")

        // if there is a post with that postId
        // set the changes
        // also check if request.user is avail
        if(request.user) {
            // check if post exist by grabing from the database 
            const like_data = {
                user: request.user,
            }
            // add to the likes
            post.reactions.likes.unshift(like_data);

            // save update to the collections 
            await post.save();
            
            // return response and updated post 
            response.status(200).json(post.reactions.likes);

            // console 
            console.log(post.reactions.likes)
        }
        

    } catch (error) {
        console.log(error);
        response.status(500).json("Server Error ");
    }
}

// get all comments
const get_likes = async (request: Request, response: Response) => {


    // grab posts id
    const postId = <string>request.params.postId;

    try {
        // grab post
        const post = await Post.findOne({ _id: postId }).sort("-1");

        // check for errors
        if (!post) response.status(400).json("There was an un-expected error");

        // check if empty
        if ( post.reactions.likes && post.reactions.likes.length === 0) {
            response.status(200).json("There are no comment for this post...");
        } else {
            response.status(200).json(post.reactions.likes);
        }

    } catch (error) {
        console.log(error);
        response.status(500).json("There was an error fetching comments")
    }
}


export { like_post, get_likes }