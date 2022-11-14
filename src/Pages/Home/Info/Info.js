import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../../assets/icons/clock.svg"
import phone from "../../../assets/icons/phone.svg"
import marker from "../../../assets/icons/marker.svg"

const Info = () => {
    return (
        <div className='bg-dark-100 grid grid-cols-4 md:grid-cols-1 gap-4 '>
            <InfoCard img={clock}></InfoCard>
            <InfoCard img={phone}></InfoCard>
            <InfoCard img={marker}></InfoCard>
        </div>
    );
};

export default Info;