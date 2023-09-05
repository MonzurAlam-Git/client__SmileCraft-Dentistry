import React from "react";
import chair from "../../assets/images/chair.png";
import "./Banner.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Link2Appointment from "../../CommonComponent/Link2Appointment";

const Banner = () => {
  return (
    <div className="bg-banner my-10  ">
      <div className=" mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex flex-col lg:flex-row-reverse">
            {/* Banner Image  */}
            {/* <img src={chair} alt="chair" className="rounded-lg shadow-2xl" /> */}
            <img
              src="https://i.ibb.co/1JM5Tq2/young-female-patient-visiting-dentist-office.jpg"
              alt="chair"
              className="w-full rounded-lg shadow-2xl lg:w-2/5"
            />
            {/* Banner text  */}
            <div className="mx-5 my-5 font-belleza">
              <h1 className="text-4xl font-bold text-primary">
                <Typewriter
                  options={{
                    strings: [
                      "Experience The Art Of Dentistry",
                      "A smile is the shortest distance between two people.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="py-6 ">
                <span className="ml-10">Elevate your smile </span>
                with our unique blend of precision and creativity. Our practice
                transforms dentistry into an art, crafting confident, beautiful
                smiles. Discover an environment that merges science and
                creativity to create exceptional smiles that reflect your
                individuality. Welcome to an evolving work of art, where your
                journey to a brighter smile begins.
              </p>
              <Link2Appointment></Link2Appointment>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
