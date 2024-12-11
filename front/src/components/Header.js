import './Header.css';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaTicketAlt, FaHome, FaCog, FaInfoCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        className="shadow-sm"
      >
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <FaTicketAlt className="me-2" size={30} /> {/* Icon */}
            <span className="fw-bold">Ticketing System</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#" className="d-flex align-items-center">
                <FaHome className="me-2" /> Home
              </Nav.Link>
              <Nav.Link href="#configuration-form" className="d-flex align-items-center">
                <FaCog className="me-2" /> Configure
              </Nav.Link>
              <Nav.Link href="#about" className="d-flex align-items-center">
                <FaInfoCircle className="me-2" /> About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
