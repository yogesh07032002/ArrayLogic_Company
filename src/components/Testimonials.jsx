import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import React, { useState } from "react";

// ClientAvatar component: displays the client's image if available,
// otherwise shows a fallback avatar with the client's initials.
const ClientAvatar = ({ src, name }) => {
  const [imgError, setImgError] = useState(false);

  // Helper function to extract initials from the client's name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  // If there's no image or if the image fails to load, render fallback styling.
  if (!src || imgError) {
    return (
      <div className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-orange-400 shadow-md mb-4 bg-orange-200 text-orange-600 text-2xl font-bold">
        {getInitials(name)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setImgError(true)}
      className="w-24 h-24 rounded-full object-cover border-4 border-orange-400 shadow-md mb-4"
    />
  );
};

const testimonials = [
  {
    name: "Adity Pansare",
    role: "CEO, Thanosphere Solutions Pvt. Ltd.",
    feedback:
      "Partnering with ArrayLogic was a transformative experience. Their agile approach and technical proficiency ensured our project's seamless execution and success.",
    image: "/images/testimonial1.jpg",
    rating: 5,
  },
  {
    name: "Datta Patil",
    role: "Rajya Sachiv",
    feedback:
      "The creative solutions and attention to detail from ArrayLogic were impressive. We highly recommend their services to any business.",
    image: "/images/testimonial2.jpg",
    rating: 4,
  },
  {
    name: "Akshay Patil",
    role: "CEO, CallElectrician",
    feedback:
      "Working with ArrayLogic was a game-changer. Their agile methodologies and technical expertise made our project a huge success.",
    image: "/images/testimonial3.jpg",
    rating: 4.5,
  },
  {
    name: "Namdev Chaudhari",
    role: "Owner, NDC Tours & Travels",
    feedback:
      "Working with ArrayLogic was a game-changer. Their agile methodologies and technical expertise made our project a huge success.",
    image: "/images/testimonial3.jpg",
    rating: 4.5,
  },
  {
    name: "Kaumodaki Lonkar",
    role: "CEO , Entrepreneur Bulletin",
    feedback:
      "Partnering with ArrayLogic was a transformative experience. Their agile approach and technical proficiency ensured our project's seamless execution and success.",
    image: "/images/testimonial3.jpg",
    rating: 4.5,
  },
  {
    name: "Ashish Kalshetty",
    role: "Manager, WoohooFashions",
    feedback:
      "Our collaboration with ArrayLogic was highly rewarding. Their agile strategies and technical mastery drove our project's success effortlessly.",
    image: "/images/testimonial3.jpg",
    rating: 4.5,
  },
  {
    name: "Raj Pittlewar",
    role: "Trainer, Talwarkar Gym",
    feedback:
      "Our collaboration with ArrayLogic was highly rewarding. Their agile strategies and technical mastery drove our project's success effortlessly.",
    image: "/images/testimonial3.jpg",
    rating: 4.5,
  },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (rating + 0.5 === i) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }
  return stars;
};

function Testimonial() {
  return (
    <div className="bg-gradient-to-r from-orange-100 to-orange-50 py-16">
      <h2 className="text-5xl text-center font-extrabold text-orange-600 mb-12 drop-shadow-lg">
        What Our Clients Say
      </h2>
      <div className="max-w-screen-xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-2"
          >
            <div className="flex flex-col items-center mb-6">
              <ClientAvatar src={testimonial.image} name={testimonial.name} />
              <h3 className="text-2xl font-bold text-black text-center">
                {testimonial.name}
              </h3>
              <p className="text-sm text-black text-center">{testimonial.role}</p>
              <div className="flex justify-center mt-2">
                {renderStars(testimonial.rating)}
              </div>
            </div>
            {testimonial.feedback && (
              <p className="text-black font-bold text-center italic leading-relaxed">
                {testimonial.feedback}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
