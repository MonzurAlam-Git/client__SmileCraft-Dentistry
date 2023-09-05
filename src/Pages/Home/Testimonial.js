import React from "react";
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
        "I can't thank SmileCraft Dentistry enough for their exceptional service. From the warm welcome at the reception to the thorough explanation of my treatment options.My teeth have never felt cleaner, and I'm genuinely excited for my next visit!",
      name: "Manzur Alam",
      location: "California",
      img: "https://i.ibb.co/KVR2BY4/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg",
    },
    {
      _id: 2,
      talks:
        "Absolutely the best dental experience I've ever had! Dr. Smith's expertise and gentle approach eased my nerves I left with a brighter smile and a newfound confidence in my dental health. Highly recommended!",
      name: "Subaha Ayat Oadifa",
      location: "Toronto",
      img: "https://i.ibb.co/85ZFj92/lau-keith-dc-Zsx-UAAJXs-unsplash.jpg",
    },
    {
      _id: 3,
      talks:
        "Finding a dental practice that truly understands my needs was a game-changer. SmileCraft Dentistry goes above and beyond to provide top-notch care. and the teams genuine dedication to patient comfort is evident. I left feeling grateful for their exceptional service",
      name: "Aznihatul Samaoat Iyusra",
      location: "Alikoodom",
      img: "https://i.ibb.co/H4py8sh/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
    },
    {
      _id: 4,
      talks:
        "This dental clinic is a hidden gem! The staff were so friendly and professional. The state-of-the-art equipment made my treatment a breeze, and my teeth have never felt this clean.I pray to Vogoban for their wellbeing",
      name: "Maruf Chowdhury",
      location: "GoshailDanga",
      img: "https://i.ibb.co/4SvTgj7/samuel-raita-Ri-Dx-Dg-Hg7pw-unsplash.jpg",
    },
    {
      _id: 5,
      talks:
        "I couldn't be happier with my dental visit! The dentist was incredibly skilled, and the office had a luxurious ambiance. They even offered a massage chair while I waited! My teeth have never looked better, and I'm actually looking forward to my next check-up",
      name: "Newaz Nur Papon",
      location: "RongiCity",
      img: "https://i.ibb.co/Nm5pw6B/albert-dera-ILip77-Sbm-OE-unsplash.jpg",
    },
  ];

  return (
    <section className="mt-12 bg-img bg-no-repeat ">
      <div className="">
        {/* title part  */}
        <div className="text-center">
          <h1 className="text-cyan-600 text-2xl">Testimonial</h1>
          <h1 className="text-3xl">What Our Patient Says</h1>
        </div>
        {/* background image part  */}
        {/* <div className="w-24 lg:w-48">
          <img src={quote} alt="" />
        </div> */}
      </div>

      <div className="my-12 mx-5 gap-10 grid grid-cols-1 lg:grid-cols-3 ">
        {reviews.map((review) => (
          <ReviewSection key={review._id} review={review}></ReviewSection>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
