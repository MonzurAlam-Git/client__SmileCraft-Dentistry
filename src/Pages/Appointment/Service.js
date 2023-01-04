import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { _id, name, slot } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <h2 className="card-name text-blue-600 text-center font-bold">{name}</h2>
                {slot.length > 0 ? <p className='font-semibold text-center'>{slot.length} slots available</p> : <p className='text-red-600'>No Slot Available</p>
                }

                <div className="card-actions justify-center">
                    <label htmlFor="booking_modal"
                        onClick={() => setTreatment(service)}
                        disabled={slot.length === 0}
                        className="btn btn-primary mx-auto">Book Now
                    </label>
                    {/* FUNC_MODAL_1 :Clicking on the label will set service as treatment */}
                </div>
            </div>
        </div >
    );
};

export default Service;