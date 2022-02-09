import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleArticles } from "../actions/post";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { RootState } from '../store';
import { Image } from "react-bootstrap";
import CommentScreen from "./CommentScreen";
import ReactionScreen from "./ReactionScreen";


// interface definitions 
interface ArticleStateProps {
    loading?: any,
    error?: any,
    article?: any
}

const ReaderScreen = () => {
    const params = useParams();

    const dispatch = useDispatch();

    // grab articles from the server : on page load
    useEffect(() => {
        // dispathes the get articles action: to grab posts from the server
        dispatch(getSingleArticles(params.id));
    }, [0])

    // select the articles from the state: 
    const StateSingleArticles = useSelector((state: RootState) => state.getSingleArticle);
    const { loading, error, article }: ArticleStateProps = StateSingleArticles;


    return (
        <div className="container">
            {error && <Message variant="error" children={error} />}
            {loading && <Loader />}

            {article && (
                <div className="wrapper mt-5 mb-5">
                     <div>
                         <h3 className="display-4">{article.title} - writen by ** <span className="text-primary text-underline">{article.user.name} **</span></h3> 
                    </div>

                    <div className="header-content">
                          <Image src={`https://rugipo-blog.herokuapp.com${article.images}`} alt={article.images} fluid />
                    </div>

                    <div className="body-content">
                        <p className="display-1 mt-2 mb-5 "> {article.body} </p>
                    </div>

                   

                    <ReactionScreen key={article.title} id={article._id} />

                    <CommentScreen key={article.comment} id={article._id} />

                    
                </div>

            )}
           

        </div>
    )
}

export default ReaderScreen
