import React from "react";

const ReviewSection = ({ review }) => {
  const { name, talks, img, location } = review;
  return (
    <div className="card p-10 bg-base-100 bg-opacity-30 shadow-xl mb-10">
      <div className="card-body">
        {/* review part  */}
        <p>{talks}</p>
        <div className="flex justify-center">
          {/* Reviewer photo */}
          <div className="avatar">
            <div className=" w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
              <img className="" alt="" src={img} />
            </div>
          </div>
          {/* Reviewer Info part */}
          <div className="grid">
            <h2 className="card-title ml-5">{name}</h2>
            <p className="ml-5">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
