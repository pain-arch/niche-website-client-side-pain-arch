import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark">
            <Container>
                <Row>
                    <Col className="my-4 first-part">
                        <h1 className="text-light">We are always here <br/>
                            <span style={{ color : "#FFDE59" }}>for your comfort</span>
                        </h1>
                        <div className="d-flex my-3">
                            <a href="https://facebook.com/" target="_blank" rel="noreferrer" >
                                <i className="fab fa-facebook-square mx-2 fs-5 text-light"></i>
                            </a>
                            <a href="https://facebook.com/" target="_blank" rel="noreferrer" >
                                <i className="fab fa-twitter-square mx-2 fs-5 text-light"></i>
                            </a>
                            <a href="https://facebook.com/" target="_blank" rel="noreferrer" >
                                <i className="fab fa-instagram mx-2 fs-5 text-light"></i>
                            </a>
                            <a href="https://facebook.com/" target="_blank" rel="noreferrer" >
                                <i className="fab fa-google-plus-square mx-2 fs-5 text-light"></i>
                            </a>
                        </div>
                    </Col>
                    <Col className="my-4 text-center">
                        <h4 className="text-light mt-4">Main</h4>
                        <div className="mt-3">
                            <Link className="text-light text-decoration-none d-block" to="/">Home</Link>
                            <Link className="text-light text-decoration-none d-block" to="/products">Products</Link>
                        </div>
                    </Col>
                    <Col className="my-4 text-center">
                        <h4 className="text-light mt-4">Inner Pages</h4>
                        <div className="mt-3">
                            <Link className="text-light text-decoration-none d-block" to="/dashboard">Dashboard</Link>
                            <Link className="text-light text-decoration-none d-block" to="/about-us">About Us</Link>
                        </div>
                    </Col>
                    <Col className="my-4 text-center">
                        <h4 className="text-light mt-4">Others</h4>
                        <div className="mt-3">
                            <Link className="text-light text-decoration-none d-block" to="/login">Login</Link>
                        </div>
                    </Col>
                </Row>
                    <p className="text-end text-light d-inline-block">Travelio © 2020 by <span style={{color: "#FFDE59"}}>Dev.shykat-himu</span></p>
            </Container>
        </div>
    );
};

export default Footer;