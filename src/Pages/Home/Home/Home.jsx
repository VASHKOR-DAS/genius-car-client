import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div className='Home'>
            <br />
            <Banner></Banner>
            <br /><br />
            <About></About>
        </div>
    );
};

export default Home;