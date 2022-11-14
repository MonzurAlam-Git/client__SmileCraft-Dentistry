import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Appointment from './Appointment';
import Banner from './Banner';
import Info from './Info/Info';
import Services from './Services/Services';


const Home = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;