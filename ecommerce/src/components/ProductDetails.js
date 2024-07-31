import React from 'react';
import { useParams } from 'react-router-dom';
import { NavBar } from '../Navbar/Navbar';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../components/ProductDetails.css';



const products = [
    {
        id: 1,
        image: 'https://wpthemes.themehunk.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product26-320x320.png',
        title: 'Aliquam erat volutpat',
        originalPrice: 1000,
        discountedPrice: 999,
        rating: 3,
        discount: '1.00',
        description: 'A high-quality product designed for everyday use. It features a sleek and modern design, perfect for all occasions. Built to last, it offers excellent durability. Ideal for those who appreciate both style and functionality.',
    },
    {
        id: 2,
        image: 'https://wpthemes.themehunk.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product27-320x320.png',
        title: 'Suspendisse gravida lacus varius',
        originalPrice: 1000,
        discountedPrice: 999,
        rating: 4,
        discount: '1.00',
        description: 'This innovative product blends elegance and practicality. It is crafted with precision to provide outstanding performance. The design is both ergonomic and aesthetic. A great choice for enhancing your lifestyle.',
    },
    {
        id: 3,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/products11-320x320.png',
        title: 'Suspendisse vehicula at dui',
        originalPrice: 156,
        discountedPrice: 56,
        rating: 5,
        discount: '100.00',
        description: 'Experience premium quality with this exceptional product. It boasts advanced features and top-notch materials. Perfect for users who seek the best in performance and design. Elevate your experience with this superior choice.',
    },
    {
        id: 4,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product15-320x320.png',
        title: 'Fusce nec diam et dolor',
        originalPrice: 45,
        discountedPrice: 40,
        rating: 2,
        discount: '5.00',
        description: 'An affordable product offering reliable functionality. Designed for those who need a simple, no-frills solution. It’s perfect for basic everyday tasks. A great value for its price, delivering essential features.',
    },
    {
        id: 5,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product16-320x320.png',
        title: 'Donec ullamcorper turpis',
        originalPrice: 45,
        discountedPrice: 42,
        rating: 3,
        discount: '3.00',
        description: 'Versatility meets efficiency in this practical product. Ideal for users looking for functionality and ease of use. The design is straightforward, ensuring hassle-free operation. A dependable choice for everyday needs.',
    },
    {
        id: 6,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product19-320x320.png',
        title: 'Aenean non pellentesque mauris',
        originalPrice: 1000,
        discountedPrice: 999,
        rating: 4,
        discount: '1.00',
        description: 'A perfect blend of style and substance, this product excels in both areas. Crafted with attention to detail, it offers an impressive array of features. Suitable for a variety of applications. It’s a top pick for quality and design.',
    },
    {
        id: 7,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product1-320x320.png',
        title: 'Pellentesque dignissim sapien...',
        originalPrice: 530,
        discountedPrice: 78,
        rating: 1,
        discount: '452.00',
        description: 'This product is a basic model with essential features. While it may not have all the bells and whistles, it serves its purpose well. Ideal for those on a budget looking for functionality. Simple and straightforward, it gets the job done.',
    },
    {
        id: 8,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product10-320x320.png',
        title: 'Curabitur ultricies ante ultricies...',
        originalPrice: 1110,
        discountedPrice: 45,
        rating: 5,
        discount: '1065.00',
        description: 'Offering exceptional value, this product is a standout choice. It combines premium features at an unbeatable price. Perfect for those who demand the best without breaking the bank. A reliable and stylish addition to any collection.',
    },
    {
        id: 9,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product6-320x320.png',
        title: 'Morbi varius ligula eget ante',
        originalPrice: 55,
        discountedPrice: 45,
        rating: 3,
        discount: '10.00',
        description: 'A practical product that meets everyday needs with ease. It offers a balanced mix of quality and affordability. The design is user-friendly, making it accessible to all. A solid choice for those seeking dependable performance.',
    },
    {
        id: 10,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product7-320x320.png',
        title: 'Mauris elit magna, aliquet',
        originalPrice: 210,
        discountedPrice: 50,
        rating: 4,
        discount: '160.00',
        description: 'Designed for those who appreciate good value and great features. This product delivers impressive quality at a competitive price. It’s versatile and suitable for various uses. A smart choice for savvy shoppers looking for excellence.',
    },
    {
        id: 11,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product8-320x320.png',
        title: 'Vivamus luctus urna sed urna',
        originalPrice: 150,
        discountedPrice: 120,
        rating: 5,
        discount: '30.00',
        description: 'A top-tier product with outstanding features and reliability. It’s crafted for users who demand excellence in every aspect. Perfect for both professional and personal use. A trusted choice that delivers consistent results.',
    },
    {
        id: 12,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product9-320x320.png',
        title: 'Nunc feugiat mi a tellus',
        originalPrice: 90,
        discountedPrice: 70,
        rating: 2,
        discount: '20.00',
        description: 'An affordable option that doesn’t compromise on quality. This product offers reliable performance for everyday tasks. It’s simple, efficient, and easy to use. A great value for money, suitable for all users.',
    },
    {
        id: 13,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product12-320x320.png',
        title: 'Vestibulum ante ipsum primis',
        originalPrice: 120,
        discountedPrice: 95,
        rating: 4,
        discount: '25.00',
        description: 'This product stands out for its quality and design. It’s crafted to meet high standards and offers great value. Ideal for those looking for a reliable and stylish option. A must-have for anyone seeking a top-quality product.',
    },
    {
        id: 14,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product13-320x320.png',
        title: 'In faucibus orci luctus et',
        originalPrice: 80,
        discountedPrice: 60,
        rating: 3,
        discount: '20.00',
        description: 'A balanced product that offers both quality and affordability. It’s designed to cater to a wide range of needs. Practical and easy to use, it’s perfect for everyday applications. A solid choice for anyone seeking reliable performance.',
    },
    {
        id: 15,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product14-320x320.png',
        title: 'Etiam feugiat lorem non metus',
        originalPrice: 200,
        discountedPrice: 180,
        rating: 5,
        discount: '20.00',
        description: 'An excellent choice for those who value high quality. This product is designed to offer the best in performance and durability. Suitable for various uses, it’s a versatile and reliable option. A premium product at a reasonable price.',
    },
    {
        id: 16,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product20-320x320.png',
        title: 'Phasellus viverra nulla ut',
        originalPrice: 220,
        discountedPrice: 200,
        rating: 2,
        discount: '20.00',
        description: 'A practical and straightforward product for daily use. It offers reliable features and decent quality at an affordable price. Ideal for those who need a functional product without extra features. A dependable choice for basic needs.',
    }
];

export const ProductDetails = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const product = products.find(product => product.id === parseInt(id)); // Find the product by ID

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <NavBar />
            <div className="product-details">
                <Container>
                    <Row>
                        <Col xs={12} md={6} className="mb-3">
                            <div className="product-image text-center">
                                <img src={product.image} alt={product.title} />
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="product-info">
                                <h4>{product.title}</h4>
                                <hr />
                                <div className="price">
                                    <span className="original-price">£{product.originalPrice}</span>
                                    <span className="discounted-price">£{product.discountedPrice}</span>
                                </div>
                                <div className="description">
                                    <p style={{ fontWeight: "300" }}>{product.description}</p>
                                </div>
                                <Button variant="warning" className="add-to-cart-btn">View On Amazon</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};