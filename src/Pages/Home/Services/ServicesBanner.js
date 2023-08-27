import React from "react";
import servicesBanner from "../../../assets/images/treatment.png";

const ServicesBanner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 mb-10">
        <div className="hero-content flex flex-col lg:flex-row">
          <img
            alt="banner"
            src={servicesBanner}
            className=" rounded-lg shadow-2xl"
          />
          <div className="px-20">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms!
            </h1>
            <p className="py-6">
              Experience outstanding dental care that fits your needs perfectly.
              Our dedicated team is here to provide exceptional treatment
              customized just for you. Your healthy, radiant smile awaits.
              Discover personalized dental excellence today!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
