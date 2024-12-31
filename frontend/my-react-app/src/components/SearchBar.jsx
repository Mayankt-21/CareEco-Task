/*import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const EcommerceNavbar = ({onCategoryChange,onSearch})=> {
    const [categories,setCategories]=useState([]);
    const[query,setQuery]=useState('');
    const [suggestions,setSuggestions]=useState([]);
    
    useEffect(()=>{
        
        
        const fetchcategories=async()=>{
            try{
                //console.log("Fetching categories");
                const{data}=await axios.get('https://fakestoreapi.com/products/categories');
                //console.log("Categories fetched:",data);
                setCategories(data);
            }catch(error){
                console.error('Error',error);
                setCategories([]);
            }
        };
        fetchcategories();
    },[]);
    const fetchSuggestions=async(term)=>{
        try {
            if (term.length > 2) {
                //console.log("Fetching suggestions for:", term);
              const { data } = await axios.get('https://fakestoreapi.com/products');
              //console.log("Products fetched:", data);
              const filteredSuggestions = data.filter((product) =>
                product.title.toLowerCase().startsWith(term.toLowerCase())
              );
              //console.log("Filtered suggestions:", filteredSuggestions);
              setSuggestions(filteredSuggestions);
            } else {
                //console.log("Clearing suggestions, term too short");
              setSuggestions([]); // Clear suggestions if query is too short or deleted
            }
          } catch (error) {
            console.error('Error fetching suggestions:', error);
            //setSuggestions([]); // Handle error by clearing suggestions
          }
    };
    const handleSearchChange=(e)=>{
        const value=e.target.value;
        setQuery(value);
        fetchSuggestions(value);
        onSearch(value);
    };
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="categories" id="navbarScrollinDropdown">
                {categories.length>0?(
                    categories.map((category,index)=>(
                        <NavDropdown.Item 
                        key={index} 
                        onClick={()=>onCategoryChange(category)}
                        as={Link}
                        to={`/categories/${category}`}
                        >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </NavDropdown.Item> 
                    ))
                ) : (
                    <NavDropdown.Item disabled>Loading...</NavDropdown.Item>
                )}
            </NavDropdown>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
            <NavDropdown title="Account" id="navbarScrollingAccountDropdown">
              <NavDropdown.Item as={Link} to="/account">My Account</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/wishlist">Wishlist</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex position-relative" style={{width:'400px'}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={handleSearchChange}
            />
            <Button variant="outline-success">Search</Button>
            {suggestions.length>0 &&(
                <ul
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  zIndex: 10,
                  maxHeight: '200px',
                  overflowY: 'auto',
                  listStyleType: 'none',
                  margin: 0,
                  padding: '5px 0',
                }}
              >
                {suggestions.map((product) => (
                  <li
                    key={product.id}
                    style={{
                      padding: '5px 10px',
                      cursor: 'pointer',
                      borderBottom: '1px solid #eee',
                    }}
                    onClick={() => window.location.href = `/products/${product.id}`}
                  >
                    {product.title}
                  </li>
                ))}
              </ul>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EcommerceNavbar;


import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          E-Commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/search">
              Search
            </Nav.Link>
            <Nav.Link as={Link} to="/order-history">
              Order History
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
*/

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';

function NavScrollExample() {
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
              <Button variant="outline-primary" onClick={handleShowLogin} className="mx-2">
                Login
              </Button>
              <Button variant="outline-success" onClick={handleShowSignup}>
                Sign Up
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={handleCloseLogin} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formLoginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLoginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Signup Modal */}
      <Modal show={showSignup} onHide={handleCloseSignup} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formSignupName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSignupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSignupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Create a password" />
            </Form.Group>

            <Button variant="success" type="submit">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavScrollExample;

