// import modules
import Post from '../model/post';
import { Response, Request } from "express";


// get all posts records
const get_articles = async (request: Request, response: Response) => {
    try {
        // grab all articles
        const Article = await Post.find({}).sort("-1").populate("user").select("-password");

        if (!Article) response.status(400).json("Bad Request");

        response.status(200).json(Article);

    } catch (error) {
        console.error("an error occured, check the server " + error);
        response.status(500).json("Error while fetching articles...");
    }

}

// get single article
const get_single_article = async (request: Request, response: Response) => {
    const objectId = <string>request.params.id;

    try {
        // try to get specific article details
        const Article = await Post.findOne({ _id: objectId }).populate("user").select("-password");

        // check for any errors
        if (!Article) {
            response.status(400).json("Bad request");
            return;
        }

        // return result if request successess 
        response.status(200).json(Article);

    } catch (error) {
        console.log(error);
        response.status(500).json("There was an error fetching resources...")
    }
}

// create a new article
const create_article = async (request: Request, response: Response) => {
    // grabs user submission objects 
    const { images, title, body } = request.body;

    try {
        // create a new article object 
        const article = {
            user: request.user,
            images,
            title,
            body
        }

        // submit created article
        const new_article = await Post.create(article);

        // check for errors
        if (!new_article) {
            response.status(400).json("error occured... check your request body properly...")
        }

        // send response for success
        response.status(200).json(new_article);

    } catch (error) {
        console.log(error);
        response.status(500).json("A error occured during article creation...")
    }
}

export { create_article, get_articles, get_single_article }