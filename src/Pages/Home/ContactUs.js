import React from 'react';
import bg from "../../../src/assets/images/appointment.png"

const ContactUs = () => {
    return (
        <div style={{
            background: `url(${bg})`
        }} className="py-10 grid justify-center  my-10 ">
            <div className='mb-5 '>
                <p className='text-teal-500 text-2xl text-center'> Contact Us</p>
                <p className=' text-white font-bold text-3xl'> Stay Connected With Us</p>
            </div>
            {/* form  */}
            <div className=''>
                <input type="text" placeholder="Name" className="input input-bordered mb-5 w-full max-w-xs" /> <br />
                <input type="text" placeholder="Email" className="input input-bordered mb-5 w-full max-w-xs" /> <br />
                <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs mb-5" /> <br />
                <button className="btn btn-primary grid mx-auto ">Submit</button>
            </div>
        </div>
    );
};

export default ContactUs;