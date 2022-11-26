import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div>
            <div className={`card mx-4 px-8 py-4 mb-10 text-base-100 lg:card-side shadow-xl ${bgClass}`}>
                <figure className='pt-5'>
                    <img src={img} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{cardTitle}!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCard;