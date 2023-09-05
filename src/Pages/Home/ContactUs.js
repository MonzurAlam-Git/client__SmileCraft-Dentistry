import React from "react";
import bg from "../../../src/assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
      }}
      className="py-10 my-10  "
    >
      {/* text  */}
      <div className="mb-5 ">
        <p className="text-teal-500 text-2xl text-center"> Contact Us</p>
        <p className=" text-white font-bold text-3xl text-center">
          {" "}
          Stay Connected With Us
        </p>
      </div>
      {/* form  */}
      <div className="">
        <div className="grid grid-col justify-center">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered  w-full"
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered  w-full"
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-lg w-full "
          />{" "}
          <br />
        </div>
        <button className="btn btn-primary grid mx-auto ">Submit</button>
      </div>
    </div>
  );
};

export default ContactUs;
