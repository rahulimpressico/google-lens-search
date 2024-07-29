import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./front-page.css";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import { Card, Image } from "react-bootstrap";

const Category = [
  {
    image:
      "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/categ-a.png",
    title: "Accessories",
  },
  {
    image:
      "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/category-img-1-woo-slider.png",
    title: "Cameras",
  },
  {
    image:
      "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/cate-audio.png",
    title: "Audio",
  },
  {
    image:
      "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/category-img-6-woo-slider.png",
    title: "Headphones",
  },
  {
    image:
      "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/cat-w.png",
    title: "Smart Watch",
  },
  {
    image:
      "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/cate-phone.png",
    title: "Smartphone",
  },
  {
    image:
      "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/cate-sp.png",
    title: "Speaker",
  },
  {
    image:
      "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/cate-s.png",
    title: "Watches",
  },
  {
    image:
      "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/cat-pc.png",
    title: "Laptop",
  },
];
const Frontpage = () => {
  const [activeLink, setActiveLink] = useState("");
  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  const handleNavLeave = () => {
    setActiveLink("");
  };

  const linkStyle = (link) => ({
    color: activeLink === link ? "yellow" : "black",
    textDecoration: "none",
  });

  return (
    <Container fluid style={{ backgroundColor: "white" }}>
      <Row className="second-row">
        {" "}
        <Container
          style={{
            backgroundColor: "white",
            padding: "20px",
          }}
        >
          <Row>
            <Col xs={2}>
              <h6 className="text-center mb-4">Market</h6>
              {Category.map((category, index) => (
                <Row key={index} me={2} className="mb-3 category-row">
                  <Card style={{ border: "none" }}>
                    <Card.Body
                      onMouseOver={() => handleNavClick(`#${category.title}`)}
                      onMouseLeave={handleNavLeave}
                      style={linkStyle(`#${category.title}`)}
                      className="d-flex align-items-center p-0 categories"
                    >
                      <Image
                        src={category.image}
                        width="30"
                        height="30"
                        className="categoryimage"
                      />
                      {category.title}
                    </Card.Body>
                  </Card>
                </Row>
              ))}
            </Col>
            <Col xs={8}>
              <Carousel>
                <Carousel.Item>
                  <img
                    src="https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/slider1.png"
                    height="440px"
                    width="100%"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/slider2.png"
                    height="440px"
                    width="100%"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col xs={2}>
              <Row className="Rows">
                <img
                  src="https://150698241.v2.pressablecdn.com/big-shop-electro/wp-content/uploads/sites/164/2021/01/side-image-1.png"
                  width="10px"
                  className="rImage"
                />
              </Row>
              <Row className="Rows">
                <img
                  src="https://150698241.v2.pressablecdn.com/big-shop-electro/wp-content/uploads/sites/164/2021/01/side-image2.png"
                  width="10px"
                  className="rImage"
                />
              </Row>
              <Row className="Rows">
                <img
                  src="https://150698241.v2.pressablecdn.com/big-shop-electro/wp-content/uploads/sites/164/2021/01/side-image-3.png"
                  width="10px"
                  className="rImage"
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default Frontpage;
