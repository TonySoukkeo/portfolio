import React from "react";

const Banner = () => {
  return (
    <div id="banner">
      <div id="overlay">
        <div className="container">
          <div id="banner-btn-outer">
            <div id="banner-btn-inner" />
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
