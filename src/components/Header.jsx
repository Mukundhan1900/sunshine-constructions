import logo from "../assets/logo.jpg";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <header className="header">

      <div className="logo">
        <HashLink smooth to="/#top">
        <img src={logo} alt="Sunshine Construction" />

        <div className="logo-text">
          <h2>Sunshine Construction</h2>
          <span>Building Your Dream</span>
        </div>
        </HashLink>
      </div>

      <nav className="nav-menu">
        <HashLink smooth to="/#stats">Statistics</HashLink>

        <HashLink smooth to="/#projects">Projects</HashLink>

        <HashLink smooth to="/#services">Services</HashLink>

        <HashLink smooth to="/#process">Process</HashLink>

        <HashLink smooth to="/#mission">Client Reviews</HashLink>
      </nav>

      <div className="header-right">
        <a
          href="https://wa.me/918903311111"
          className="quote-btn"
          target="_blank"
          rel="noreferrer"
        >
          Contact Us
        </a>
      </div>

    </header>
  );
}