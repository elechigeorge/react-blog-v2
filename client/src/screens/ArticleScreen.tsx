import { useEffect } from "react";
import ArticleItemScreen from "./ArticleItemScreen";
import { useDispatch, useSelector } from "react-redux";
import { getArticle } from "../actions/post";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { RootState } from '../store';



// interface definitions 
interface ArticleStateProps {
    loading: any,
    error: any,
    articles: any
}

const ArticleScreen = () => {
    const dispatch = useDispatch();

    // grab articles from the server : on page load
    useEffect(() => {
        // dispathes the get articles action: to grab posts from the server
        dispatch(getArticle());
    }, [0])

    // select the articles from the state: 
    const StateArticles = useSelector((state: RootState) => state.getArticle);
    const { loading, error, articles }: ArticleStateProps = StateArticles;

    return (
        <div className="container">
            <h3 className="text-success mt-3">Articles</h3>
            <hr />
            {articles && articles.map((article: any) => <ArticleItemScreen key={article._id} article={article} reactions={article.reactions.likes} />)}
        </div>
    )
}

export default ArticleScreen
