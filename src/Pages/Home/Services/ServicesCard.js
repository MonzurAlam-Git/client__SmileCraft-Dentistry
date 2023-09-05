import React from "react";

const ServicesCard = ({ img, title, description }) => {
  return (
    <div>
      <div className="card w-auto bg-base-100 shadow-xl lg:w-96 h-96">
        <figure className="px-10">
          <img src={img} alt="Shoes" className="rounded-xl mt-3" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
{
  /* <div className="card w-96 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
        </div>
    </div>
</div> */
}
