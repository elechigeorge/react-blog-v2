import { useEffect } from "react";
import ArticleItemScreen from "./ArticleItemScreen";
import { useDispatch, useSelector } from "react-redux";
import { getArticle } from "../actions/post";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { RootState } from '../store';
import { logout } from "../actions/user";
import { useJwt } from "react-jwt";



// interface definitions 
interface ArticleStateProps {
    loading?: any,
    error?: any,
    articles?: any,
    userInfo?: any
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

    // get authentication credentials
    const userLogin = useSelector((state: RootState) => state.userLogin);
    const { userInfo }: ArticleStateProps = userLogin;

    // check auth token expiration
    const token:string = userInfo.token;

    const { isExpired } = useJwt(token);

    useEffect(() => {
        if(isExpired && !userInfo) {
            dispatch(logout())

            document.location = "/" 
        }
    }, [0, dispatch])

    return (
        <div className="container">
            <h3 className="text-success mt-3">Articles</h3>
            <hr />
            {loading && <Loader />}
            {error && <Message variant="danger" children={error} />}
            {articles && articles.map((article: any) => <ArticleItemScreen key={article._id} article={article} reactions={article.date} />)}
        </div>
    )
}

export default ArticleScreen
