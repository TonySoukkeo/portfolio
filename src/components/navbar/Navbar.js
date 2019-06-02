import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-block d-sm-none">
      <nav className="navbar navbar-light ">
        <a href="" className="navbar-brand">
          <img
            style={{
              width: "80px",
              height: "50px"
            }}
            src="/assets/logo.png"
            alt=""
          />
        </a>
        <span />
        <span>
          <a href="tel:4068991762">
            <i
              style={{
                cursor: "pointer",
                marginLeft: "60px",
                fontSize: "1.5rem",
                color: "#000033"
              }}
              className="fas fa-phone-square"
            />
          </a>
        </span>
        <span>
          <a href="https://github.com/TonySoukkeo" target="_blank">
            <i
              style={{
                cursor: "pointer",
                marginLeft: "10px",
                fontSize: "1.8rem",
                color: "#007c00"
              }}
              className="fab fa-github-alt"
            />
          </a>
        </span>
        <button
          typ="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          className="navbar-toggler"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="" className="nav-link">
                About
              </a>{" "}
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Projects
              </a>{" "}
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Contact
              </a>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
