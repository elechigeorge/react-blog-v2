import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
// import { register } from '../actions/UserAction';



const RegisterScreen = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [uploading, setUploading] = useState(false);
    const [images, setImages] = useState('');
    const [message, setMessage] = useState(null)

    // const dispatch = useDispatch()

    // const userRegister = useSelector((state) => state.userRegister)
    // const { loading, error, userInfo } = userRegister


    const submitHandler = (e: any) => {
        e.preventDefault()

        // dispatch(register(username, email, password))

    }

    // if (userInfo) {
    //     return <Redirect to="/verify" />
    // }


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

            //     const { data } = await api.post('/upload', formData, config);

            //    setImages(data);
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
                <h1>Register an account</h1>
                {/* {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />} */}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='profile_picture_handler'>
                        <Form.Label>Profile Image</Form.Label>
                        <Form.Control
                            type='images'
                            placeholder='Your Profile Picture'
                            value={images}
                            onChange={(e) => setImages(e.target.value)}
                            disabled
                        ></Form.Control>
                        <input
                            type="file"
                            name="images"
                            id='image-file'
                            placeholder='Select your profile picture here'
                            onChange={uploadFileHandler}
                            className="file"
                            style={{width: "300px"}}
                        />
                        {uploading && <Loader />}
                    </Form.Group>


                    <Form.Group controlId='name'>
                        <Form.Label>Names</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter Your Full Name'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <div className="d-grid mt-3">
                        <Button type='submit' variant='dark' className="btn-block">
                            Register
                        </Button>
                    </div>
                </Form>

                <Row className='py-3'>
                    <Col>
                        Have an Account ?{' '}
                        <Link to={'/login'}>
                            Login
                        </Link>
                    </Col>
                </Row>
            </FormContainer>
        </div>
    )
}

export default RegisterScreen;