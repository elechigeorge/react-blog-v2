import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/user';
import { RootState } from '../store';
import { useNavigate } from "react-router-dom";



const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch();
    let navigate = useNavigate();

    const userLogin:any = useSelector((state: RootState) => state.userLogin)
    const { loading, error, userInfo } = userLogin;


    const submitHandler = (e:any) => {

        e.preventDefault();

        dispatch(login(email, password))

    }

        useEffect(() => {
            if (userInfo){
                return navigate("/auth");
            }
        },[userInfo, dispatch, login]);


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }} >
        
            <FormContainer>
                <h1>Login to your account</h1>
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                
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
                    <div className="d-grid">
                        <Button type='submit' variant='dark' className="btn-block mt-2">
                            Login
                        </Button>
                    </div>
                </Form>

                <Row className='py-3'>
                    <Col>
                        New Student ?{' '}
                        <Link to={'/register'}>
                            Register
                        </Link>
                    </Col>
                </Row>
            </FormContainer>
        </div>
    )
}

export default LoginScreen;