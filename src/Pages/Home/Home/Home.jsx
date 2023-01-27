import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div className='Home'>
            <br />
            <Banner></Banner>
            <br /><br />
            <About></About>
            <br /><br /><br />
            <Services></Services>
        </div>
    );
};

export default Home;