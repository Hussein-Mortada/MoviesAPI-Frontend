import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth } from '../context/AuthContext';
import '../css/NavBar.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';



function NavBar() {

  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    logout();
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); 

    navigate(`/search/${searchQuery}`);
  };




  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Hussein Movies Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Search</Button>
            </Form>
            <p className='welcome-text'>{isLoggedIn ? '' :
              <>
                <NavDropdown title="Login" id="navbarScrollingDropdown" className='navDropdown'>
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                </NavDropdown>
              </>

            }
            </p>


            {isLoggedIn && <Button variant="outline-success" onClick={handleLogout}>Logout</Button> }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


