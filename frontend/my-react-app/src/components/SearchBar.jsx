import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const NavScrollExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserDetails(token);
    }
  }, []);

  const fetchUserDetails = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setIsLoggedIn(true);
        setUserName(data.name);
      } else {
        console.error("Error fetching user details:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setUserName("");
        alert("Logged out successfully");
      } else {
        alert("Failed to log out. Please try again.");
      }
    } catch (error) {
      alert("Error during logout.");
    }
  };

  const redirectToProfile = () => {
    navigate("/profile");
  };

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
              {!isLoggedIn ? (
                <>
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
                </>
              ) : (
                <>
                  <div
                    className="profile-circle"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#4CAF50",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      cursor: "pointer",
                    }}
                    title="Profile"
                    onClick={redirectToProfile}
                  >
                    {userName.charAt(0).toUpperCase()}
                  </div>
                  <Button
                    variant="outline-danger"
                    onClick={handleLogout}
                    className="mx-2"
                  >
                    Logout
                  </Button>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LoginModal
        show={showLogin}
        handleClose={handleCloseLogin}
        setIsLoggedIn={setIsLoggedIn}
        fetchUserDetails={fetchUserDetails}
      />
      <SignupModal show={showSignup} handleClose={handleCloseSignup} />
    </>
  );
};

export default NavScrollExample;
