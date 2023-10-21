import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Button from '../Button';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsServiceDropdownOpen(true);
  };

  const handleToggleDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-transparent pt-3">
        <Container>
          <div className="d-lg-none d-block"></div>
          <Navbar.Brand to="/" as={Link}>
            <img src={Logo} className='logo ms-lg-0 ms-5' alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" as={Link} to="/About">About</Nav.Link>
              <NavDropdown
                title="Service"
                id="basic-nav-dropdown"
                show={isServiceDropdownOpen}
                onMouseEnter={handleMouseEnter}
              >
                <NavDropdown.Item as={Link} to="/Visualizer">
                  3D Visualizer
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Preview">
                  360 Preview
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" as={Link} to="/">Pricing</Nav.Link>
              <Nav.Link href="#link" as={Link} to="/">Learn</Nav.Link>
              <Nav.Link
                onClick={handleToggleDropdown}
                href="#link"
                as={Link}
                to="/contact"
              >
                Contact
              </Nav.Link>
            </Nav>
            <Link to="/Login">
              <Button style1={true} content="Get Started" />
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
