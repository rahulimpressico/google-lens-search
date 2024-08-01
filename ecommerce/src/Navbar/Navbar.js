import React, { useState, useRef } from 'react'; // Import useState
import './NavBar.css';
import { Navbar, Nav, Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("#home");
    const fileInputRef = useRef(null);
    const [smartSearch, setSmartSearch] = useState(false);

    const handleSmartSearchToggle = () => {
        setSmartSearch(!smartSearch);
    };


  const handleNavClick = (link) => {
    setActiveLink(link);
  };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Selected file:', file);
            // Handle file upload logic here
        }
    };


    // Define styles for active and inactive links
    const linkStyle = (link) => ({
        color: activeLink === link ? 'yellow' : 'inherit',
        textDecoration: 'none'
    });

    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/')
    }

    return (
        <Container fluid>
            <Row className='navbar'>
                <Col xs={6}><span style={{ fontSize: "12px" }} onClick={goToHome}>Welcome to ImpressicoStore!</span></Col>
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
                <Col xs={12} md={3} className='logo text-md-left'>
                    <img
                        src='https://www.impressico.com/wp-content/uploads/2020/09/impressico-logo.png'
                        alt='impressico logo'
                        onClick={goToHome}

                    />
                </Col>
                <Col xs={12} md={4} className='search-bar'>
                    <div className="input-icon-wrapper">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="search-input"
                        />
                        {smartSearch && (
                            <label htmlFor="file-upload" className="file-upload-label">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-upload"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                                </svg>
                                <input
                                    id="file-upload"
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={(e) => handleFileUpload(e)}
                                />
                            </label>
                        )}
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3}>
                    <Row className="nav-icons" style={{ color: 'white', alignItems: 'center' }}>
                        <Col xs={12} md={8}>
                            <div className="form-check form-switch d-flex align-items-center">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                    checked={smartSearch}
                                    onChange={handleSmartSearchToggle}
                                />
                                <label htmlFor="flexSwitchCheckDefault" style={{ color: "black", fontWeight: "600", fontSize: "10px", marginLeft: "10px" }}>Smart Search</label>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="d-flex justify-content-around mt-2 mt-md-0">
                            <a href="#"><i className="fas fa-lock"></i></a>
                            <a href="#"><i className="fas fa-heart"></i></a>
                            <a href="#"><i className="fas fa-shopping-bag"></i></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='dropdown-row'>
                <Container fluid>
                    <Row className="py-2">
                        {/* Category Dropdown Section */}
                        <Col xs={12} md={6} className='category-container'>
                            <div className='d-flex align-items-center'>
                                <div className='category me-2'>
                                    <span><i className="fas fa-bars" /></span>
                                </div>
                                <div className='horizontal-dropdown'>
                                    <NavDropdown title="Category" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Accessories</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Cameras</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Audio</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Headphones</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Smartphone</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Speaker</NavDropdown.Item>


                                    </NavDropdown>
                                </div>
                            </div>
                        </Col>

                        {/* Links Section */}
                        <Col xs={12} md={6} className='link'>
                            <Container fluid className="p-0">
                                <Navbar expand="lg" className="p-0">
                                    <Nav className="me-auto d-flex flex-wrap justify-content-center justify-content-md-end">
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

