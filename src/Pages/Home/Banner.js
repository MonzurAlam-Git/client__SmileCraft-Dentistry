import React from "react";
import chair from "../../assets/images/chair.png";
import "./Banner.css";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="bg-banner grid grid-rows-2">
      <div className="hero min-h-screen">
        {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}
        <div className="flex flex-col lg:flex-row-reverse">
          <img src={chair} alt="chair" className=" rounded-lg shadow-2xl" />
          <div className="mx-5 my-5">
            <h1 className="text-4xl font-bold text-primary">
              <Typewriter
                options={{
                  strings: ["Experience The Art Of Dentistry"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="py-6">
              Elevate your smile with our unique blend of precision and
              creativity. Our practice transforms dentistry into an art,
              crafting confident, beautiful smiles. Discover an environment that
              merges science and creativity to create exceptional smiles that
              reflect your individuality. Welcome to an evolving work of art,
              where your journey to a brighter smile begins.
            </p>
            <button className="btn btn-primary text-bold uppercase bg-gradient-to-r from-cyan-500 to-cyan-800">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
