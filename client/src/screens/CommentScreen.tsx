import { FC } from "react";
import { Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { RootState } from '../store';


interface CommentProps {
    id?: any,
}

const CommentScreen: FC<CommentProps> = ({ id }) => {

    const params = useParams();

    return (
        <div className="p-4 my-3 bg-light" >
           <h2>Comment Here now ... {console.log(params.id)}</h2>
           <hr />
           <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Write a comment here</Form.Label>
                <Form.Control as="textarea" rows={3} />
                <Form.Text>make sure your comments follows community guides</Form.Text>
              </Form.Group>
              <div className="d-grid">
                <Button className="bg-dark text-light"><i className="fas fa-comments"></i> post my comment </Button>
              </div>
            </Form>
        </div>
    )
}

export default CommentScreen;
