import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../../assets/icons/clock.svg"
import phone from "../../../assets/icons/phone.svg"
import marker from "../../../assets/icons/marker.svg"

const Info = () => {
    return (
        <div className='bg-dark-100 grid grid-cols-1 lg:grid-cols-3 mx-10'>
            <InfoCard bgclassName="bg-gradient-to-r from-cyan-500 to-cyan-800" cardTitle="Opening Hours" img={clock}></InfoCard>
            <InfoCard bgclassName=" bg-base-content" cardTitle="Visit Our Locations" img={marker}></InfoCard>
            <InfoCard bgclassName="bg-gradient-to-r from-cyan-500 to-cyan-800" cardTitle="Contact Us Now" img={phone}></InfoCard>
        </div>
    );
};

export default Info;