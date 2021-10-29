import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarItems = () => {
  return (
    <Navbar bg="info" variant="light">
      <Container fluid>
        <Navbar.Brand href="#Home">Nahid Mahmud</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/About" className="nav-link">About</Link>
          <Link to="/Portfolio" className="nav-link">Portfolio</Link>
          <Link to="/Contact" className="nav-link">Contact</Link>
          <Link to="/Resume" className="nav-link">Resume</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarItems;