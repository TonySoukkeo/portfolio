import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div id="banner">
      <div id="overlay">
        <div className="container">
          <div id="banner-btn-outer">
            <Link to="/main">
              {" "}
              <div id="banner-btn-inner" />{" "}
            </Link>
          </div>
          <div id="banner-btn-view"> View</div>
          <div id="banner-text-box">
            <span className="banner-name-text">Soukkeo</span>
            <span className="banner-design-text">Designs.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
