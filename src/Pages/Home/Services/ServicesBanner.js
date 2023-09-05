import React from "react";
import servicesBanner from "../../../assets/images/treatment.png";
import Link2Appointment from "../../../CommonComponent/Link2Appointment";

const ServicesBanner = () => {
  return (
    <div className="mt-10">
      <div className="hero min-h-screen  mb-10">
        <div className="hero-content flex flex-col lg:flex-row">
          {/* image part  */}
          <img
            alt="banner"
            src={servicesBanner}
            className="w-screen rounded-lg shadow-2xl"
          />
          {/* text part  */}
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
            <Link2Appointment></Link2Appointment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
