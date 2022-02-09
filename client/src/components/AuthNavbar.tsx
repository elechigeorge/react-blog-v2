import React, { Fragment, useEffect } from 'react';
import { Nav, Button, Navbar, Container } from "react-bootstrap";
import { Outlet } from 'react-router-dom';
import { logout } from "../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../store';
import { useNavigate } from "react-router-dom";

const AuthNavbar = () => {

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const userLogin:any = useSelector((state: RootState) => state.userLogin)
  const { loading, error, userInfo } = userLogin;

  const logoutUser = () => dispatch(logout())

  useEffect(() => {
      if (!userInfo){
          return navigate("/");
      }
  },[userInfo]);


  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/auth">DASHBOARD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/auth">Welcome {userInfo && userInfo.name}</Nav.Link>
              <Nav.Link href="auth/article/create">Create new article</Nav.Link>
              <Nav.Link href="https://github.com/elechigeorge" target="_blank" rel="noreferrer">Github</Nav.Link>
              <Nav.Link href="/" onClick={logoutUser}>log me out</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </Fragment>
  )
}

export default AuthNavbar;
