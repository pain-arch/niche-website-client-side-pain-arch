import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div style={{marginTop: "100px" }} className="aboutus">
            <div className="container-design">
            <Container className="text-center">
                <div className="text-center mt-5">
                    <h1 className="text-center mt-5 title">About Us</h1>
                </div>
                <h1 className="details-design my-5">
                    From wanderlusters to <br /> 
                    East and West Asia,<br /> 
                    <span className="color" >Dialz</span> is helping people <br /> 
                    experience the sheer <br /> 
                    pleasure of life.
                </h1>
                <p className="my-4 fw-bold details">Dialz is a Handwatch website that is the opposite of textbook learning: it’s enjoyable and effective. Founded in 2018, Memrise has quickly grown and now close to 1 million people in 189 countries to help senior peoples with us to better themselves, connect with others and with the world around them.</p>
            </Container>
        </div>
        </div>
    );
};

export default AboutUs;