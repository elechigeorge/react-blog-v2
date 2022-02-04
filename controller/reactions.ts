// IMPORT MODULES
import User from '../model/user';
import Post from "../model/post";
import { Request, Response } from "express";


// LIKE A PUBLISHED ARTICLE.
const like_post = async (request: Request, response: Response) => {
    // grab the id of the post 
    const postId = request.params.postId;

    try {
        // check if post exist by grabing from the database 
        const like_data = {
            user: request.user,
        }
 
        // fetch post from db
        const post = await Post.findOne({_id: postId});

        if (!post) {
            response.status(401).json("No article was found...")
        }

        // if there is a post with that postId
        // set the changes 
        post.reactions.likes.unshift(like_data);

        // save update to the collections 
        await post.save();
        
        // return response and updated post 
        response.status(200).json(post);

    } catch (error) {
        console.log(error);
        response.status(500).json("Server Error ");
    }
}



export { like_post }