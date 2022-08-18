import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Header/Header.css";

function NonLoggedHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="header">
      <Container>
        <Navbar.Brand href="/home">Kriova</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav>
          <Nav.Link href="#deets">Help</Nav.Link>
          <Nav.Link href="#deets">Contact Us!</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NonLoggedHeader;
