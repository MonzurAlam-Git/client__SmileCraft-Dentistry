import React from "react";
import appointment from "../../../src/assets/images/appointment.png";
import dr from "../../../src/assets/images/doctor.png";
import PrimaryButton from "../Shared/Button/PrimaryButton";

const Appointment = () => {
  return (
    <div>
      <div>
        <div
          className="hero"
          style={{
            background: `url(${appointment})`,
          }}
        >
          <div className="flex justify-center items-center my-10">
            {/* hero-content flex-col lg:flex-row */}

            <div className="hidden lg:block flex-1 mt-[-150px]">
              <img
                alt="doctor"
                style={{ height: "620px", width: "606px" }}
                src={dr}
                className="  "
              />
            </div>

            <div className="flex-1 px-5 ">
              <h1 className="text-xl font-bold text-cyan-600">Appointment</h1>
              <h1 className="text-3xl font-bold text-white py-5">
                Make an appointment Today
              </h1>
              <p className="py-6 text-white">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
