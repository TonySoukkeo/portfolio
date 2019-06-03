import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md text-center sticky-top">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img
            style={{
              width: "80px",
              height: "50px"
            }}
            src="/assets/logo.png"
            alt=""
          />
        </a>

        <button
          typ="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          className="navbar-toggler"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="tel:4068991762">
                <i
                  style={{
                    color: "black",
                    fontSize: "1.7rem"
                  }}
                  className="fas fa-phone"
                />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/TonySoukkeo"
                target="_blank"
              >
                <i
                  style={{
                    color: "#007c00",
                    fontSize: "2rem"
                  }}
                  className="fab fa-github-alt"
                />
              </a>
            </li>
          </ul>
          <div className="d-none d-md-block ml-auto">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>{" "}
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  Projects
                </a>{" "}
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>{" "}
              </li>
            </ul>
          </div>

          <ul className="d-block d-md-none navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>{" "}
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Projects
              </a>{" "}
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
