import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Carousel } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../components/ProductCard.css';


const products = [
    {
        image: 'https://wpthemes.themehunk.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product26-320x320.png',
        title: 'Aliquam erat volutpat',
        originalPrice: 1000,
        discountedPrice: 999,
        rating: 3,
        discount: '999.00'
    },
    {
        image: 'https://wpthemes.themehunk.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product27-320x320.png',
        title: 'Suspendisse gravida lacus varius',
        originalPrice: 1000,
        discountedPrice: 999,
        rating: 4,
        discount: '129.00'
    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/products11-320x320.png',
        title: 'Suspendisse vehicula at dui',
        originalPrice: 56,
        discountedPrice: 56,
        rating: 5,
        discount: '99.00'

    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product15-320x320.png',
        title: 'Fusce nec diam et dolor',
        originalPrice: 45,
        discountedPrice: 40,
        rating: 0,
        discount: '5.00'
    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product16-320x320.png',
        title: 'Donec ullamcorper turpis',
        originalPrice: 45,
        discountedPrice: 42,
        rating: 0,
        discount: '3.00'
    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product19-320x320.png',
        title: 'Aenean non pellentesque mauris',
        originalPrice: 1000,
        discountedPrice: 999,
        rating: 0,
        discount: '1000.00'
    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product1-320x320.png',
        title: 'Pellentesque dignissim sapien...',
        originalPrice: 0,
        discountedPrice: 78,
        rating: 0
    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product10-320x320.png',
        title: 'Curabitur ultricies ante ultricies...',
        originalPrice: 1110,
        discountedPrice: 45,
        rating: 0,
        discount: '10.00'
    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product6-320x320.png',
        title: 'Morbi varius ligula eget ante',
        originalPrice: 55,
        discountedPrice: 45,
        rating: 0,
        discount: '10.00'
    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product7-320x320.png',
        title: 'Mauris elit magna, aliquet',
        originalPrice: 210,
        discountedPrice: 50,
        rating: 0
    }
];



const Category = [
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/categ-a.png',
        title: 'Accessories',

    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/category-img-1-woo-slider.png',
        title: 'Cameras',

    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/cate-audio.png',
        title: 'Audio',

    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/category-img-6-woo-slider.png',
        title: 'Headphones',

    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/cat-w.png',
        title: 'Smart Watch',

    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product19-320x320.png',
        title: 'Aenean non pellentesque mauris',

    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/cate-phone.png',
        title: 'Smartphone',

    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/cate-sp.png',
        title: 'Speaker',

    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/cate-s.png',
        title: 'Watches',

    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product7-320x320.png',
        title: 'Mauris elit magna, aliquet',

    }
];

const ProductCard = () => {
    const [activeLink, setActiveLink] = useState("#home");
    const [techCurrentSlide, setTechCurrentSlide] = useState(0);
    const [categoryCurrentSlide, setCategoryCurrentSlide] = useState(0);

    const handleNavClick = (link) => {
        setActiveLink(link);
    };

    const handleSelectTech = (selectedIndex, e) => {
        setTechCurrentSlide(selectedIndex);
    };

    const handleSelectCategory = (selectedIndex, e) => {
        setCategoryCurrentSlide(selectedIndex);
    };

    const TechHandlePrev = () => {
        const prevSlide = techCurrentSlide === 0 ? techTotalSlides - 1 : techCurrentSlide - 1;
        setTechCurrentSlide(prevSlide);
    };

    const TechHandleNext = () => {
        const nextSlide = techCurrentSlide === techTotalSlides - 1 ? 0 : techCurrentSlide + 1;
        setTechCurrentSlide(nextSlide);
    };

    const CategoryHandlePrev = () => {
        const prevSlide = categoryCurrentSlide === 0 ? categoryTotalSlides - 1 : categoryCurrentSlide - 1;
        setCategoryCurrentSlide(prevSlide);
    };

    const CategoryHandleNext = () => {
        const nextSlide = categoryCurrentSlide === categoryTotalSlides - 1 ? 0 : categoryCurrentSlide + 1;
        setCategoryCurrentSlide(nextSlide);
    };

    const linkStyle = (link) => ({
        color: activeLink === link ? 'black' : 'grey', // Black if active, otherwise grey
        textDecoration: 'none',
        fontWeight: 'bold'
    });

    const itemsPerRow = 4;
    const rowsPerSlide = 2;
    const itemsPerSlide = itemsPerRow * rowsPerSlide;
    const techTotalSlides = Math.ceil(products.length / itemsPerSlide);
    const categoryItemsPerSlide = 6; // Single row of 4 items each
    const categoryTotalSlides = Math.ceil(products.length / categoryItemsPerSlide);

    return (
        <>
            <Container fluid>
                <Row className='Product-dropdown-row'>
                    <Container>
                        <Row>
                            <Col xs={6}>
                                <div style={{ marginTop: "20px", marginRight: "80px" }}>
                                    <h6 style={{ fontWeight: "bold" }}>Latest Tech</h6>
                                </div>
                            </Col>
                            <Col xs={6} className='link'>
                                <Container fluid className="p-0">
                                    <Navbar expand="lg" className="p-2" style={{ backgroundColor: "white" }}>
                                        <Nav className="me-auto">
                                            <Nav.Link
                                                href="#home"
                                                onClick={() => handleNavClick("#home")}
                                                style={linkStyle("#home")}
                                            >
                                                Accessories
                                            </Nav.Link>
                                            <Nav.Link
                                                href="#blog"
                                                onClick={() => handleNavClick("#blog")}
                                                style={linkStyle("#blog")}
                                            >
                                                Camera
                                            </Nav.Link>
                                            <Nav.Link
                                                href="#shop"
                                                onClick={() => handleNavClick("#shop")}
                                                style={linkStyle("#shop")}
                                            >
                                                Headphones
                                            </Nav.Link>
                                            <Nav.Link
                                                href="#accessories"
                                                onClick={() => handleNavClick("#accessories")}
                                                style={linkStyle("#accessories")}
                                            >
                                                Smart Watch
                                            </Nav.Link>
                                            <div style={{ marginTop: "6px", marginRight: "6px" }}>
                                                <button onClick={TechHandlePrev} style={{ background: "white", width: "25px", height: "25px", lineHeight: "25px", fontSize: "12px", color: "#ccc", border: "1px solid #ccc", borderRadius: "4px" }}><i className="slick-nav fa fa-angle-left" /></button>
                                            </div>
                                            <div style={{ marginTop: "6px" }}>
                                                <button onClick={TechHandleNext} style={{ background: "white", width: "25px", height: "25px", lineHeight: "25px", fontSize: "12px", color: "#ccc", border: "1px solid #ccc", borderRadius: "4px" }}><i className="slick-nav fa fa-angle-right" /></button>
                                            </div>
                                        </Nav>
                                    </Navbar>
                                </Container>
                            </Col>
                        </Row>
                        <hr style={{ margin: "0 18%", backgroundColor: "yellow", height: "2px", border: "none" }} />
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <div style={{ marginLeft: "17%", marginRight: "12%" }}>
                            <Carousel activeIndex={techCurrentSlide} onSelect={handleSelectTech} controls={false} indicators={false}>
                                {Array.from({ length: techTotalSlides }).map((_, slideIndex) => (
                                    <Carousel.Item key={slideIndex}>
                                        <Row>
                                            {products.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((product, index) => (
                                                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                                                    <div className="product-card">
                                                        <img src={product.image} alt={product.title} className="product-image" />
                                                        <div className="product-info">
                                                            <span>{product.title}</span>
                                                            <div className="product-pricing">
                                                                {product.originalPrice > 0 && (
                                                                    <span className="original-price">£{product.originalPrice}</span>
                                                                )}
                                                                <span className="discounted-price">£{product.discountedPrice}</span>
                                                            </div>
                                                            {product.discount && <div className="discount">-{product.discount}</div>}
                                                            <div className="rating">
                                                                {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </Container>
                </Row>
            </Container>
            <Container fluid>
                <Row className='Product-dropdown-row'>
                    <Container>
                        <Row>
                            <Col xs={6}>
                                <div style={{ marginTop: "20px", marginRight: "40px" }}>
                                    <h6 style={{ fontWeight: "bold" }}>Choose Category</h6>
                                </div>
                            </Col>
                            <Col xs={6} className='link'>
                                <Container fluid className="p-0">
                                    <div>
                                        <div style={{ marginTop: "6px", marginRight: "4px" }}>
                                            <button onClick={CategoryHandlePrev} style={{ background: "white", width: "25px", height: "25px", lineHeight: "25px", fontSize: "12px", color: "#ccc", border: "1px solid #ccc", borderRadius: "4px" }}><i className="slick-nav fa fa-angle-left" /></button>
                                        </div>
                                        <div style={{ marginTop: "-25px", marginLeft: "60px" }}>
                                            <button onClick={CategoryHandleNext} style={{ background: "white", width: "25px", height: "25px", lineHeight: "25px", fontSize: "12px", color: "#ccc", border: "1px solid #ccc", borderRadius: "4px" }}><i className="slick-nav fa fa-angle-right" /></button>
                                        </div>
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                        <hr style={{ margin: "0 18%", backgroundColor: "yellow", height: "2px", border: "none" }} />
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <div style={{ marginLeft: "17%", marginRight: "12%" }}>
                            <Carousel activeIndex={categoryCurrentSlide} onSelect={handleSelectCategory} controls={false} indicators={false}>
                                {Array.from({ length: categoryTotalSlides }).map((_, slideIndex) => (
                                    <Carousel.Item key={slideIndex}>
                                        <Row className="d-flex flex-nowrap">
                                            {Category.slice(slideIndex * categoryItemsPerSlide, (slideIndex + 1) * categoryItemsPerSlide).map((product, index) => (
                                                <Col key={index} xs={12} sm={6} md={4} lg={2}>
                                                    <div className="category-card">
                                                        <img src={product.image} alt={product.title} className="product-image" />
                                                        <div className="category-info">
                                                            <span>{product.title}</span>
                                                            span

                                                        </div>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </Container>
                </Row>
            </Container>
        </>
    );
};

export default ProductCard;