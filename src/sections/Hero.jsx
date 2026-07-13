import heroImage from "../assets/Hero.png";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">

        <div className="hero-content">

          <span className="hero-tag">
            ★ Trusted Construction Company
          </span>

          <h1>
            Building
            <span> Dreams</span>
            <br />
            Into Reality
          </h1>

          <p>
            We build premium residential, commercial and industrial
            projects with quality, innovation and trust.
          </p>

          <div className="hero-buttons">
           <HashLink smooth to="/#projects" className="primary-btn">
  Explore Projects
  <FaArrowRight />
</HashLink>
            

           <HashLink smooth to="/#services" className="secondary-btn">
  <FaPhoneAlt />
  Our Services
</HashLink>
          </div>

        </div>

      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>

    </section>
  );
}