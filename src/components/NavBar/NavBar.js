import * as React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container className='text-center'>
        <Navbar.Brand as={NavLink} to='/' className='fw-bold'>
          Creative Academy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link as={NavLink} to='/home' activeClassName='active'>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/about' activeClassName='active'>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to='/services' activeClassName='active'>
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to='/faq' activeClassName='active'>
              FAQ
            </Nav.Link>
            <Nav.Link as={NavLink} to='/contact' activeClassName='active'>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
