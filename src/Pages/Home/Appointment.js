import React from 'react';
import appointment from "../../../src/assets/images/appointment.png"
import dr from "../../../src/assets/images/doctor.png"

const Appointment = () => {
    return (
        <div>
            <div>
                <div className="hero min-h-screen " style={{ backgroundImage: `url(${appointment})` }}>
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={dr} className="max-w-sm rounded-lg " />
                        <div className='px-10'>
                            <h1 className="text-2xl font-bold text-cyan-600">Appointment</h1>
                            <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                            <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn btn-primary text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;