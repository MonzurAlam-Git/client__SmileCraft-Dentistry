import React from 'react';
import av1 from "../../../src/assets/images/people1.png"
import av2 from "../../../src/assets/images/people2.png"
import av3 from "../../../src/assets/images/people3.png"
import quote from "../../../src/assets/icons/quote.svg"
import "./Testimonial.css"
import ReviewSection from '../ReviewSection';

const Testimonial = () => {
    // const cardStyle = {
    //     width: "385px",
    //     height: "270px",
    // }


    const reviews = [
        {
            _id: 1,
            talks: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem harum, quam ea consectetur magnam unde. Provident eum libero consequatur amet.',
            name: "Manzur Alam",
            location: "California",
            img: { av1 }
        },
        {
            _id: 2,
            talks: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquid, alias consectetur adipisicing elit. Laboriosam, expedita!',
            name: "Manzuri Binte Alam",
            location: "Toronto",
            img: { av2 }
        },
        {
            _id: 3,
            talks: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium maxime perspiciatis facilis molestiae exercitationem voluptatum inventore vitae aspernatur tempora laboriosam?',
            name: "Delaf Roze",
            location: "Alikoodom",
            img: { av3 }
        },
    ]


    return (
        <section className='mt-12 px-48 bg-img' >

            <div className='flex justify-between'>
                <div className=''>
                    <h1 className='text-cyan-600 text-2xl'>Testimonial</h1>
                    <h1 className='text-3xl'>What Our Patient Says</h1>
                </div>
                <div className='w-24 lg:w-48'>
                    <img src={quote} alt="" />
                </div>
            </div>


            <div className='mt-12 flex gap-10'>
                {
                    reviews.map(review => <ReviewSection key={review._id} review={review}></ReviewSection>)
                }
            </div>
        </section >
    );
};

export default Testimonial;