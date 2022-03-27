import React, { Fragment } from 'react';
import { Nav, Button, Navbar, Container } from "react-bootstrap";
import { Outlet } from 'react-router-dom';

const Navigation = () => {

  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">BLOG</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="login" >log in</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;
