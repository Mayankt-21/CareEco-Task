import React, { useState } from "react";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const NavScrollExample = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">E-Commerce Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/search">Search</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
            </Nav>
            <Form className="d-flex me-3">
              <Form.Control
                type="search"
                placeholder="Search products..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <div className="d-flex">
              <Button
                variant="outline-primary"
                onClick={handleShowLogin}
                className="mx-2"
              >
                Login
              </Button>
              <Button variant="outline-success" onClick={handleShowSignup}>
                Sign Up
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LoginModal show={showLogin} handleClose={handleCloseLogin} />
      <SignupModal show={showSignup} handleClose={handleCloseSignup} />
    </>
  );
};

export default NavScrollExample;
