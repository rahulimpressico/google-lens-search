import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NavBar } from '../../../Navbar/Navbar';
import { Button, Col, Container, Pagination, Row } from 'react-bootstrap';
import '../css/SearchResult.css'

export const SearchResults = ({ results }) => {
    const navigate = useNavigate();
    const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const [validResults, setValidResults] = useState([]);



    const totalPages = Math.ceil(results.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    // const handleProductClick = (id) => {
    //     navigate(`/product/${id}`);
    // };

    const handleProductClick = (id) => {
        const selectedProduct = validResults.find(product => product.id === id);
        navigate(`/product/${id}`, { state: { product: selectedProduct, validResults } });
    };


    useEffect(() => {
        const checkImages = async () => {
            const validItems = [];
            for (const item of results) {
                try {
                    const response = await fetch(item.image, { method: 'HEAD' });
                    if (response.ok) {
                        validItems.push(item);
                    }
                } catch (error) {
                    console.error(`Image check failed for ${item.image}:`, error);
                }
            }
            setValidResults(validItems);
        };

        checkImages();
    }, [results]);

    return (
        <div style={{ backgroundColor: "white" }}>
            <Container>
                <Row>
                    {validResults.map((item, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3}>
                            <div className="search-card" onClick={() => handleProductClick(item.id)}>
                                <div className="image-container">
                                    <img src={item.image} alt={item.name} className="search-image" />
                                </div>
                                <div className="search-info">
                                    <span className="search-name">{item.name}</span>
                                    <div className="search-pricing">
                                        {item.actual_price > 0 && (
                                            <span className="original-price">£{item.actual_price}</span>
                                        )}
                                        <span className="discounted-price">£{item.discount_price}</span>
                                    </div>
                                    <div className="rating">
                                        {'★'.repeat(item.ratings)}{'☆'.repeat(5 - item.ratings)}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row className="justify-content-center">
                    <div className="pagination-container">
                        <Pagination>
                            <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
                            <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                            {[...Array(totalPages)].map((_, index) => (
                                <Pagination.Item
                                    key={index + 1}
                                    active={index + 1 === currentPage}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                            <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
                        </Pagination>
                    </div>
                </Row>
            </Container>
        </div>
    );
};