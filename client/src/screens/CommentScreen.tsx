import { FC, useEffect, useState } from "react";
import { Button, Form, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { RootState } from '../store';
import { getAllComment, makeComment } from "../actions/comment";
import { useJwt } from "react-jwt";
import {logout} from "../actions/user";

interface CommentProps {
    id?: any,
    loading?: any,
    error?: any,
    comment?: any,
    comments?: any,
    userInfo?: any
}

const CommentScreen: FC<CommentProps> = ({ id }) => {

    const [comment, setComment] = useState("");

    const params = useParams();

    const dispatch = useDispatch();

    // grab all comments from the server : on page load
    useEffect(() => {
        // dispathes the get articles action: to grab posts from the server
        dispatch(getAllComment(id));
    }, [0, dispatch])
   

    // select the comments from the state: comment from the server
    const getComment = useSelector((state: RootState) => state.getComment);
    const { loading, error, comments }: CommentProps = getComment;

    // select the comment from the state: make recently made
    const createComment = useSelector((state: RootState) => state.createComment);
    const { loading:createLoading, error:createError, comment:createComments }: CommentProps = createComment;

    // get authentication credentials
    const userLogin = useSelector((state: RootState) => state.userLogin);
    const { userInfo }: CommentProps = userLogin;


    // check auth token expiration
    const token:string = userInfo.token;

    const { isExpired } = useJwt(token);

    useEffect(() => {
        if(isExpired) {
            dispatch(logout())
        }
    }, [0, dispatch])


    // custom functions: ELECHI FUNCTIONS :)
    const writeComment = () => {
        if(comment && comment !== "") {
            dispatch(makeComment(id, comment))
            setComment("")
        } else {
            window.alert("You need to write a comment first")

        }
    }



    return (
        <div className="p-4 my-3 bg-light" >
           <h4>Leave a thoughtful comment below ... to elaborate this discussion </h4>
           <hr />
           <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>What do you think ? ..</Form.Label>
                <Form.Control as="textarea" 
                    rows={3} 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <Form.Text>make sure your comments follows community guides</Form.Text>
              </Form.Group>
              <div className="d-grid">
                <Button className="bg-dark text-light" onClick={writeComment}><i className="fas fa-comments"></i> post my comment </Button>
              </div>
            </Form>

            <div>
                {/*comments from the server*/}
                {createLoading && <Loader />}
                {createError && <Message variant="danger" children={createError} />}
                {createComments && createComments.comment ? (
                        <div className="mt-4">
                            <ListGroup>
                            <ListGroup.Item>
                                <div>
                                    <p className="lead text-success">{createComments.comment}</p>
                                    <hr />

                                    <p className="text-danger">written by * <i className="fas fa-user"></i> {createComments.user.name}</p>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                        </div>
                    ) : null
                }

                {loading && <Loader />}
                {error && <Message variant="danger" children={error} />}
                {comments && comments.map((comment: any) =>
                    <div className="mt-4" key={comment.date}>
                        <ListGroup>
                            <ListGroup.Item>
                                <p className="lead text-success">{comment.comment}</p>
                                <hr />

                                <p className="text-danger">written by * <i className="fas fa-user"></i> {comment.user.name}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                )}
 
            </div>
        </div>
    )
}

export default CommentScreen;
