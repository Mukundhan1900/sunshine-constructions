import logo from "../assets/logo.jpg";

export default function Header() {
  return (
   <header className="header">



  <a href="#top" className="logo">

    <img src={logo} alt="Sunshine Construction" />



    <div className="logo-text">

      <h2>Sunshine Construction</h2>

      <span>Building Your Dream</span>

    </div>

  </a>



  <nav className="nav-menu">

    <a href="#stats">Statistics</a>

    <a href="#projects">Projects</a>

    <a href="#services">Services</a>

    <a href="#process">Process</a>

    <a href="#mission">Client Reviews</a>

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