import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner';
import Info from './Info/Info';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Info></Info>
        </div>
    );
};

export default Home;