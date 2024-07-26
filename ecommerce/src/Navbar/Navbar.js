import React, { useState } from 'react'; 
import './NavBar.css';
import { Navbar, Nav, Container, Row, Col, Form } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("#home");

    const handleNavClick = (link) => {
        setActiveLink(link);
    };

    // Define styles for active and inactive links
    const linkStyle = (link) => ({
        color: activeLink === link ? 'yellow' : 'inherit',
        textDecoration: 'none'
    });

    return (
        <Container fluid>
            <Row className='navbar'>
                <Col xs={6}><span style={{ fontSize: "12px" }}>Welcome to ImpressicoStore!</span></Col>
                <Col xs={6}><div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-pinterest"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-skype"></i></a>
                </div>
                </Col>
            </Row>
            <Row className='logo-title'>
                <Col xs={3} className='logo'>
                    <img src='https://www.impressico.com/wp-content/uploads/2020/09/impressico-logo.png' alt='impressico logo' />
                </Col>
                <Col xs={4} className='search-bar'>
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                    />
                </Col>
                <Col xs={3}>
                    <div className="nav-icons" style={{ color: 'white' }}>
                        <a href="#"><i className="fas fa-lock"></i></a>
                        <a href="#"><i className="fas fa-heart"></i></a>
                        <a href="#"><i className="fas fa-shopping-bag"></i></a>
                    </div>
                </Col>
            </Row>
            <Row className='dropdown-row'>
                <Container>
                    <Row>
                        <Col xs={6} className='category-container'>
                            <div className='category'>
                                <span><i className="fas fa-bars" /></span>
                            </div>
                            <div className='horizontal-dropdown'>
                                <NavDropdown title="Category" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </Col>
                        <Col xs={6} className='link'>
                            <Container fluid className="p-0">
                                <Navbar expand="lg" className="p-0">
                                    <Nav className="me-auto">
                                        <Nav.Link
                                            href="#home"
                                            onClick={() => handleNavClick("#home")}
                                            style={linkStyle("#home")}
                                        >
                                            Home
                                        </Nav.Link>
                                        <Nav.Link
                                            href="#blog"
                                            onClick={() => handleNavClick("#blog")}
                                            style={linkStyle("#blog")}
                                        >
                                            Blog
                                        </Nav.Link>
                                        <Nav.Link
                                            href="#shop"
                                            onClick={() => handleNavClick("#shop")}
                                            style={linkStyle("#shop")}
                                        >
                                            Shop
                                        </Nav.Link>
                                        <Nav.Link
                                            href="#accessories"
                                            onClick={() => handleNavClick("#accessories")}
                                            style={linkStyle("#accessories")}
                                        >
                                            Accessories
                                        </Nav.Link>
                                        <Nav.Link
                                            href="#watches"
                                            onClick={() => handleNavClick("#watches")}
                                            style={linkStyle("#watches")}
                                        >
                                            Watches
                                        </Nav.Link>
                                        <Nav.Link
                                            href="#contact"
                                            onClick={() => handleNavClick("#contact")}
                                            style={linkStyle("#contact")}
                                        >
                                            Contact Us
                                        </Nav.Link>
                                        <Nav.Link
                                            href="#upgrade"
                                            onClick={() => handleNavClick("#upgrade")}
                                            style={linkStyle("#upgrade")}
                                        >
                                            Upgrade To Pro
                                        </Nav.Link>
                                    </Nav>
                                </Navbar>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    );
};

export default NavBar;
