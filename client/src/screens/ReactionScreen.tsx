import { FC, useEffect, useState } from "react";
import { Button, Form, ListGroup, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { RootState } from '../store';
import { getAllComment } from "../actions/comment";
import { useJwt } from "react-jwt";
import {logout} from "../actions/user";


interface ReactionProps {
    id?: any,
    loading?: any,
    error?: any,
    reaction?: any,
    comments?: any,
    userInfo?: any,
}

const ReactionScreen: FC<ReactionProps> = ({ id }) => {

    const [count, setCount] = useState(null);

    const dispatch = useDispatch();


    // select the comments from the state: comment from the server
    const getComment = useSelector((state: RootState) => state.getComment);
    const { loading, error, comments }: ReactionProps = getComment;

    

    // get authentication credentials
    const userLogin = useSelector((state: RootState) => state.userLogin);
    const { userInfo }: ReactionProps = userLogin;

    // grab all comments from the server : on page load
    useEffect(() => {
        // dispathes the get articles action: to grab posts from the server
        dispatch(getAllComment(id));
    }, [0, dispatch])


    // check auth token expiration
    const token:string = userInfo.token;

    const { isExpired } = useJwt(token);

    

    return (
        <div className="p-4 my-3 bg-light" >
           <h4>Did you enjoy your read ? ...</h4>
           <hr />
           <div>
            {loading && <Loader />}
            {error && <Message variant="danger" children={error} />}


            {comments && <div>
                            <Row>
                                <Col>
                                    <div className="d-grid">
                                        <Button className="btn-lg btn-warning text-light m-2 disabled"> {comments.length} <i className="fas fa-comments"></i> </Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="d-grid">
                                        <Button className="btn-lg btn-dark text-light m-2 disabled"><i className="fas fa-glass-cheers"></i> Let me hear your thought</Button>
                                    </div>
                                </Col>
                            </Row>

                    </div>
                }
           </div>
           
        </div>
    )
}

export default ReactionScreen;
