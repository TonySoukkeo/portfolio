import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container contact-content">
        <div className="row">
          <div className="col-md-8">
            <h2
              style={{
                marginBottom: "20px"
              }}
            >
              Lets work together!
            </h2>
            <div className="phone">
              <i className="fas fa-mobile-alt fa-3x" />{" "}
              <a className="icon-text" href="tel:4068991762">
                (406)899-1762
              </a>
            </div>
            <div className="email">
              <i className="far fa-envelope fa-3x" />
              <a
                className="icon-text"
                href="mailto:tonysoukkeodesign@gmail.com"
                target="_blank"
              >
                tonysoukkeodesign@gmail.com
              </a>
            </div>
          </div>
          <div
            style={{
              marginTop: "20px"
            }}
            className="col-md-4 text-center"
          >
            <h3>My Github</h3>
            <a href="https://github.com/TonySoukkeo" target="_blank">
              <i className="fab fa-github-alt fa-5x github-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
