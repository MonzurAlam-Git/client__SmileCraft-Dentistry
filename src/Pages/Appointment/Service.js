import React from 'react';

const Service = ({ service }) => {
    const { _id, title, slot } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <h2 className="card-title text-cyan-400">{title}</h2>
                {slot.length > 0 ? <p>{slot[0]}</p> : <p className='text-red-600'>No Slot Available</p>
                }
                <div className="card-actions justify-end">
                    <button disabled={slot.length === 0} className="btn btn-primary mx-auto">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;