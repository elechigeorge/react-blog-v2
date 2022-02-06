import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { createArticle } from '../actions/post';
import api from "../utility/api";
import { RootState } from '../store';


const CreateArticleScreen = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [uploading, setUploading] = useState(false);
    const [images, setImages] = useState('');
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const newArticle:any = useSelector((state: RootState) => state.newArticle)
    const { loading, error, article } = newArticle


    const submitHandler = (e: any) => {
        e.preventDefault()

        dispatch(createArticle(images, title, body))
    }

    useEffect(() => {
        if (article) {
            return navigate(`/auth/article/${article._id}`);
        }
    },[article]);


    // PROFILE PICTURE UPLOADING STUFFS
    const uploadFileHandler = async (e: any) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('images', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }

            const { data } = await api.post('/upload', formData, config);

            setImages(data);
            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    }


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }} >
            <FormContainer>
                <h1>Create a new article</h1>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mt-3 mb-3"  controlId='profile_picture_handler'>
                        <Form.Label>Cover Image</Form.Label>
                        <Form.Control
                            type='images'
                            placeholder='Your Article Cover Picture'
                            value={images}
                            onChange={(e) => setImages(e.target.value)}
                            disabled
                        ></Form.Control>
                        <input
                            type="file"
                            name="images"
                            id='image-file'
                            placeholder='Select your article ccover picture here'
                            onChange={uploadFileHandler}
                            className="file"
                            style={{width: "300px"}}
                        />
                        {uploading && <Loader />}
                    </Form.Group>


                    <Form.Group className="mt-3" controlId='title'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Title of your article '
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        ></Form.Control>
                    </Form.Group>


                     <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlTextarea1">
		                <Form.Label>Write your article here</Form.Label>
		                <Form.Control as="textarea" 
		                    rows={3}
		                    value={body}
		                    onChange={(e) => setBody(e.target.value)}
		                    style={{height: "20vh"}}
		                />
		                <Form.Text>make sure your articles follows community guides</Form.Text>
		             </Form.Group>

                    

                    <div className="d-grid mt-3">
                        <Button type='submit' variant='dark' className="btn-block">
                            Submit article
                        </Button>
                    </div>
                </Form>

               
            </FormContainer>
        </div>
    )
}

export default CreateArticleScreen;