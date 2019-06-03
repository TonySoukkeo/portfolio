import React from "react";

const date = new Date(),
  year = date.getFullYear();

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="footer-name">
            Tony Soukkeo Design <b> &copy; {year}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
