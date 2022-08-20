import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/features/user';
import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const Logout = ()=>{
    localStorage.clear();
    dispatch(logout()); 
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/home">Kriova</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/profiles">Profile</Nav.Link>
            <Nav.Link href="/statics">Statics</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Help</Nav.Link>
            <Nav.Link href="#deets">Contact Us!</Nav.Link>
            <Nav.Link href="/signin" onClick={Logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header