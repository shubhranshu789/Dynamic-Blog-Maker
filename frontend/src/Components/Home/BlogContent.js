import React from "react";
import "./CSS/BlogContent.css";
import PropTypes from "prop-types";

import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

import pic from '../Images/gama.png'

const BlogContent = ({ className = "" }) => {

  const navigate = useNavigate();

  const goToUserView = () => {
    navigate('/userview')
  }

  return (
    <section className={`blog-content ${className}`}>
      <div className="blog-header">
        <div className="background1" />
        <div className="blog-header-inner">
          <div className="frame-parent">
            <div className="featured-post-parent">
              <div className="featured-post">Featured Post</div>
              <div className="frame-group">
                <div className="step-by-step-guide-to-choosing-parent">
                  <h1 className="step-by-step-guide-to">
                    Step-by-step guide to choosing great font pairs
                  </h1>
                  <div className="by-john-doe-container">
                    <span>{`By `}</span>
                    <span className="john-doe">John Doe</span>
                    <span className="l">{`   l   May 23, 2022 `}</span>
                  </div>
                </div>
                <p className="duis-aute-irure">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
            </div>
            <div className="button-wrapper">
              <button onClick={() => {goToUserView()}} className="button1">
                <b className="read-more">{`View Other's Blogs`}</b>
              </button>
            </div>
          </div>
        </div>
        <img
          className="httpswwwpexelscomphotom-icon"
          loading="lazy"
          alt=""
          src={pic}
        />
      </div>
    </section>
  );
};

BlogContent.propTypes = {
  className: PropTypes.string,
};

export default BlogContent;