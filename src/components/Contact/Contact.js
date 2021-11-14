import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="main-div">
                <Container>
                    <div className="text-center">
                        <h1 className="text-center my-5 title">Contact</h1>
                    </div>
                    <Row>
                        <Col className="left-side">
                            <div className="left">
                                <h1 className="my-2 headline-design">Trying to <span className="color">reach</span><br/> Us?</h1>
                                <h4 className="my-5 fs-5">To help you get the best out of <span className="color">Dialz</span>, check out our FAQ section, which has heaps of great advice, or search our community forum. Need more help? Jump over to our contact form to message the support team. If you’re a press and media person, have a look at our press kit.</h4>
                            </div>
                        </Col>
                        <Col className="right-side">
                            <div className="right">
                                <div className="text-center">
                                    <img className="w-75" src="https://www.memrise.com/hubfs/Memrise%20July%202020/Images/Banner-image.png" alt="img" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Contact;