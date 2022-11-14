import React from 'react';
import ServicesCard from './ServicesCard';
import cavity from "../../../assets/images/cavity.png"
import whitening from "../../../assets/images/whitening.png"
import fluoride from "../../../assets/images/fluoride.png"
import ServicesBanner from './ServicesBanner';

const Services = () => {
    return (
        <div className='text-center '>
            <h6 className='text-cyan-500 text-xl uppercase font-bold'>Our Services</h6>

            <h1 className='text-3xl '>Services We Provide</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 justify-center px-20 ml-20
            '>
                <ServicesCard description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati illo, repellendus eaque non vero pariatur est minus debitis error tenetur." title="Flouride treatment" img={fluoride}></ServicesCard>
                <ServicesCard description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati illo, repellendus eaque non vero pariatur est minus debitis error tenetur." title="Cavity Filling" img={cavity}></ServicesCard>
                <ServicesCard description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati illo, repellendus eaque non vero pariatur est minus debitis error tenetur." title="Teeth Whitening" img={whitening}></ServicesCard>
            </div>
            <ServicesBanner></ServicesBanner>
        </div>
    );
};

export default Services;