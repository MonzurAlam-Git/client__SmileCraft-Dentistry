import React from 'react';

const ReviewSection = ({ review }) => {
    const { name, talks, img, location } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">

            <div className="card-body ">
                <p>{talks}</p>
                <div className="flex item-center">
                    <div className="avatar">
                        <div className=" w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                            <img alt='' src={img} />
                        </div>
                    </div>
                    <div className='grid'>
                        <h2 className="card-title ml-5">{name}</h2>
                        <p className="ml-5">{location}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReviewSection;