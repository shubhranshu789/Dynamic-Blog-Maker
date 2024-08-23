import React, { useCallback, useState } from "react";
import "./CSS/Navbar.css";
import PropTypes from "prop-types";
import pic from "../Images/Blog.webp";
import { Link } from "react-router-dom";

const Navbar = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onSobreText2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footerIcons']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTabDefault1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='blogPostsGrid']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header className={`navbar ${className}`}>
      <div className="background" />

      <Link to={"/"}>
        <div className="logo-wrapper">
          <img className="logo-icon" loading="lazy" alt="Logo" src={pic} />
        </div>
      </Link>

      

      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <div className="links">
          <nav className="links-list">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/addprojects"}
            >
              <span className="home">Add Project</span>
            </Link>

            <div className="home-link" >
              <span style={{cursor : "pointer"}} className="blog1" onClick={onTabDefault1Click}>
                Go to Blogs
              </span>
            </div>
            <div className="about-us-link">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={"/about"}
              >
                <span className="about-us">About Us</span>
              </Link>
            </div>
            <span style={{cursor : "pointer"}} className="contact-us" onClick={onSobreText2Click}>
              Contact us
            </span>
          </nav>
        </div>
      </div>


      <div className="hamburger">
        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
