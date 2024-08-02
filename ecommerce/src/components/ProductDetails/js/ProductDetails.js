import React from 'react';
import { useParams } from 'react-router-dom';
import { NavBar } from '../../../Navbar/Navbar';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../css/ProductDetails.css';

import { useLocation } from 'react-router-dom';



export const ProductDetails = () => {
    const location = useLocation();
    const { product } = location.state || {};

    if (!product) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Row className="text-center">
                    <Col>
                        <img
                            src="https://jobs.ficsi.in/assets/front_end/images/no-data-found.jpg"
                            alt='No result found'
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <>
            <div className="product-details">
                <Container>
                    <Row>
                        <Col xs={12} md={6} className="mb-3">
                            <div className="product-image text-center">
                                <img src={product.image} alt={product.name} className="fixed-image-size" />
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="product-info">
                                <h4>{product.name.toUpperCase()}</h4>
                                <div className="rating">
                                    {'★'.repeat(product.ratings)}{'☆'.repeat(5 - product.ratings)}
                                </div>
                                <hr />
                                <div className="price">
                                    <span className="original-price">₹{product.actual_price}</span>
                                    <span className="discounted-price">₹{product.discount_price}</span>
                                </div>

                                <div className="description">
                                    <p style={{ fontWeight: "300" }}>{product.description}</p>
                                </div>


                                <div>
                                    <Button variant="warning" className="add-to-cart-btn">
                                        <a href={product.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                            View On Amazon
                                        </a>
                                    </Button>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};