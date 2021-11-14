import React from 'react';
import './Banner.css';
import { Carousel, Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Container fluid className="px-0 mt-5">
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 height"
                                src="https://www.watchspecialists.com/app/uploads/2020/11/1.main_banner_muhle_glashutte_terrasport_v21920x700px.jpg"
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 height"
                                src="https://www.shopavenue.co.za/wp-content/uploads/2018/08/banner.jpg"
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 height"
                                src="https://cherryoo.com/sites/default/files/DM%209243%281920px%20-%20733px%29.jpg"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Container>
        </div>
    );
};

export default Banner;