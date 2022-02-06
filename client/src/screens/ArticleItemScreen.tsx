import { FC } from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Moment from 'react-moment';


interface ArticleProps {
    article: any,
    reactions: any
}

const ArticleItemScreen: FC<ArticleProps> = ({ article, reactions }) => {
    return (
        <div className="p-4 my-3 bg-dark" style={{ borderRadius: "10px" }}>
            <p className="text-light lead">{article.title}</p>
            <div>
                <Button className="btn-sm btn-light text-success m-2 disabled"> <i className="far fa-clock"></i> <Moment fromNow>{reactions}</Moment> </Button>

                <Link to={`article/${article._id}`} className="btn btn-sm btn-success text-light m-2"><i className="fas fa-book"></i> Read Now</Link>

            </div>
        </div>
    )
}

export default ArticleItemScreen
