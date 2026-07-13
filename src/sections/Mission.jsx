import { useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import client4 from "../assets/client4.jpg";

const reviews = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Villa Owner",
    image: client1,
    review:
      "Sunshine Construction transformed our dream home into reality. Every detail was executed perfectly, and the team maintained excellent communication throughout the project.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Business Owner",
    image: client2,
    review:
      "Professional team with outstanding workmanship. They completed our commercial building ahead of schedule.",
  },
  {
    id: 3,
    name: "Vijay Kumar",
    role: "Apartment Owner",
    image: client3,
    review:
      "Excellent quality and transparent pricing. Highly recommended for residential construction.",
  },
  {
    id: 4,
    name: "Karthik Raj",
    role: "Property Developer",
    image: client4,
    review:
      "Premium finish and excellent customer support. One of the best construction companies I've worked with.",
  },
];

export default function Mission() {
  const [active, setActive] = useState(reviews[0]);

  return (
    <section className="mission" id="mission">

      <div className="mission-title">
        <span>CLIENT TESTIMONIALS</span>
        <h2>Trusted By Hundreds Of Families</h2>
      </div>

      <div className="glass-review">

        {/* Left Side */}

        <div className="client-profile">

          <img src={active.image} alt={active.name} />

          <h3>{active.name}</h3>

          <span>{active.role}</span>

          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

        </div>

        {/* Right Side */}

        <div className="review-content">

          <FaQuoteLeft className="quote" />

          <p>{active.review}</p>

        </div>

      </div>

      {/* Review Selector */}

      <div className="review-selector">

        {reviews.map((review) => (

          <div
            key={review.id}
            className={`mini-card ${
              active.id === review.id ? "active" : ""
            }`}
            onClick={() => setActive(review)}
          >

            <img src={review.image} alt={review.name} />

            <div>

              <h4>{review.name}</h4>

              <span>{review.role}</span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}