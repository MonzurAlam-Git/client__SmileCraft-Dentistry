import React from "react";
import ServicesCard from "./ServicesCard";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import fluoride from "../../../assets/images/fluoride.png";
import ServicesBanner from "./ServicesBanner";

const Services = () => {
  return (
    <div className="text-center flex flex-wrap justify-center content-center">
      <h6 className="text-cyan-500 text-xl uppercase font-bold">
        Our Services
      </h6>
      <h1 className="text-3xl ">Services We Provide</h1>
      <div
        className="flex flex-col flex-wrap lg:grid-cols-3 gap-2 justify-center px-20 ml-20
            "
      >
        <ServicesCard
          description="Our professional fluoride treatment is a powerful defense against tooth decay. Safeguard your teeth with this quick, painless, and effective procedure. Schedule your appointment today for a stronger, healthier smile"
          title="Flouride treatment"
          img={fluoride}
        ></ServicesCard>
        <ServicesCard
          description="Our skilled team offers precise and painless cavity filling treatments. Restore your tooth's health and strength with our state-of-the-art techniques. Get back to smiling confidently. Schedule your appointment now."
          title="Cavity Filling"
          img={cavity}
        ></ServicesCard>
        <ServicesCard
          description="Experience the transformation with our professional teeth whitening. Brighten your smile by several shades in just one session. Rediscover your confidence and radiate positivity. Book your teeth whitening treatment today."
          title="Teeth Whitening"
          img={whitening}
        ></ServicesCard>
      </div>
      <ServicesBanner></ServicesBanner>
    </div>
  );
};

export default Services;
