import { FC } from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


interface ArticleProps {
    post: any
}

const ArticleItemScreen: FC<ArticleProps> = ({ post }) => {

    console.log(post)
    return (
        <div className="p-4 my-3 bg-dark" style={{ borderRadius: "10px" }}>
            <p className="text-light lead">{post.name}</p>
            <div>
                <Button className="btn-sm btn-light text-success m-2 disabled">{post.reactions.likes} Likes</Button>
                <Button className="btn-sm btn-light text-danger m-2 disabled">{post.reactions.dislikes} Dislike</Button>

                <Link to={`article/${post._id}`} className="btn btn-sm btn-success text-light m-2">Read Now</Link>
              

            </div>
        </div>
    )
}

export default ArticleItemScreen
