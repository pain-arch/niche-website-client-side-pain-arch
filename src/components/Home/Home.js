import React from 'react';
import Banner from '../Banner.js/Banner';
import Contact from '../Contact/Contact';
import HomeProducts from '../HomeProducts/HomeProducts';
import ShowReviews from '../ShowReviews/ShowReviews';
import './Home.css';

const Home = () => {
    return (
        <div style={{marginTop: "75px"}}>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <ShowReviews></ShowReviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;