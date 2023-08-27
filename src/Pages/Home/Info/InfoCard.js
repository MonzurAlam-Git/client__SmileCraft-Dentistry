import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div>
      <div
        data-aos="flip-left"
        className={`card mx-4 px-5 py-4 mb-10 text-base-100 lg:card-side shadow-xl ${bgClass}`}
      >
        <figure className="pt-5">
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardTitle}!</h2>
          <p>
            We're here when you need us. Book appointments at your convenience:
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
