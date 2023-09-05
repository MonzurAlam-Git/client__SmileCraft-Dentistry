import React from "react";
import ServicesCard from "./ServicesCard";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import fluoride from "../../../assets/images/fluoride.png";
import ServicesBanner from "./ServicesBanner";
import "./Services.css";

const Services = () => {
  return (
    <div className="text-center">
      <h6 className="text-cyan-500 text-xl uppercase font-bold">
        Our Services
      </h6>
      <h1 className="text-3xl ">Services We Provide</h1>
      <div className="flex flex-wrap content-center justify-center gap-10 mt-10">
        <ServicesCard
          className=""
          description="Our professional fluoride treatment is a powerful defense against tooth decay. Safeguard your teeth with this quick, painless, and effective procedure. Schedule your appointment today for a stronger, healthier smile"
          title="Flouride treatment"
          img={fluoride}
        ></ServicesCard>
        <ServicesCard
          className=""
          description="Our skilled team offers precise and painless cavity filling treatments. Restore your tooth's health and strength with our state-of-the-art techniques. Get back to smiling confidently. Schedule your appointment now."
          title="Cavity Filling"
          img={cavity}
        ></ServicesCard>
        <ServicesCard
          className=""
          description="Experience the transformation with our professional teeth whitening. Brighten your smile by several shades in just one session. Rediscover your confidence and radiate positivity. Book your teeth whitening treatment today."
          title="Teeth Whitening"
          img={whitening}
        ></ServicesCard>
        <ServicesBanner></ServicesBanner>
      </div>
    </div>
  );
};

export default Services;
