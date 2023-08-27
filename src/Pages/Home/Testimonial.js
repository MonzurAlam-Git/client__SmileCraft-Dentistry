import React from "react";
import av1 from "../../../src/assets/images/people1.png";
import av2 from "../../../src/assets/images/people2.png";
import av3 from "../../../src/assets/images/people3.png";
import quote from "../../../src/assets/icons/quote.svg";
import "./Testimonial.css";
import ReviewSection from "../ReviewSection";

const Testimonial = () => {
  // const cardStyle = {
  //     width: "385px",
  //     height: "270px",
  // }

  const reviews = [
    {
      _id: 1,
      talks:
        "I can't thank SmileCraft Dentistry enough for their exceptional service. From the warm welcome at the reception to the thorough explanation of my treatment options, the professionalism of this practice is outstanding. The hygienist was attentive and meticulous, ensuring I felt at ease throughout the entire process. My teeth have never felt cleaner, and I'm genuinely excited for my next visit!",
      name: "Manzur Alam",
      location: "California",
      img: "https://i.ibb.co/KVR2BY4/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg",
    },
    {
      _id: 2,
      talks:
        "Absolutely the best dental experience I've ever had! The team at SmileCraft Dentistry made me feel comfortable from the moment I walked in. Dr. Smith's expertise and gentle approach eased my nerves, and the staff's friendliness added an extra layer of care. I left with a brighter smile and a newfound confidence in my dental health. Highly recommended!",
      name: "Manzuri Binte Alam",
      location: "Toronto",
      img: "https://i.ibb.co/G7TZ2qq/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
    },
    {
      _id: 3,
      talks:
        "Finding a dental practice that truly understands my needs was a game-changer. SmileCraft Dentistry goes above and beyond to provide top-notch care. The dentist took the time to address my concerns, answer my questions, and outline a comprehensive treatment plan. The office environment is serene, and the teams genuine dedication to patient comfort is evident. I left feeling grateful for their exceptional service",
      name: "Delaf Roze",
      location: "Alikoodom",
      img: "https://i.ibb.co/dJ8vf3d/edward-cisneros-H6wpor9mjs-unsplash.jpg",
    },
  ];

  return (
    <section className=" mt-12 bg-img grid grid-cols-1 lg:grid">
      <div className="">
        <div className="">
          <h1 className="text-cyan-600 text-2xl">Testimonial</h1>
          <h1 className="text-3xl">What Our Patient Says</h1>
        </div>
        <div className="w-24 lg:w-48">
          <img src={quote} alt="" />
        </div>
      </div>

      <div className="mt-12 flex flex-col  gap-10">
        {reviews.map((review) => (
          <ReviewSection key={review._id} review={review}></ReviewSection>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
