import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleArticles } from "../actions/post";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { RootState } from '../store';
import { Image, Row, Col, Button } from "react-bootstrap";
import CommentScreen from "./CommentScreen";


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
                         <h3>{article.title}</h3>
                    </div>

                    <div className="header-content">
                          <Image src={`https://www.qualityformationsblog.co.uk/wp-content/uploads/2019/07/what-are-company-formation-documents.jpg`} alt={article.images} fluid />
                    </div>

                    <div className="body-content">
                        <p className="display-1 mt-2 mb-5 "> {article.body} </p>
                    </div>

                    <div className="footer-content mt-5">
                        <p className="lead">DID YOU ENJOY YOUR READ ? </p>

                        <div>
                            <Row>
                                <Col>
                                    <div className="d-grid">
                                        <Button className="btn-lg btn-warning text-light m-2 disabled">{article.reactions.likes.length} Reactions</Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="d-grid">
                                        <Button className="btn-lg btn-dark text-light m-2"><i className="fas fa-glass-cheers"></i> Applaud the writer</Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    
                    <CommentScreen id={article._id} />
                </div>

            )}
           
        </div>
    )
}

export default ReaderScreen
