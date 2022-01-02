import React, { Fragment } from 'react';
import { Nav, Button } from "react-bootstrap";
import { Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <Fragment>
      <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">BLOGGING SYSTEM</a>
          <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" target="_blank" rel="noreferrer" href="https://github.com/elechigeorge">github</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" target="_blank" rel="noreferrer" href="https://youtube.com">watch demo</a>
              </li>
             
            </ul>
            <li className="nav-item d-flex navbar-nav">
                <a className="nav-link" href="login">Log in</a>
              </li>
          </div>
        </div>
      </Nav>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;
