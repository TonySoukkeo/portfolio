import React, { Component } from "react";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

class Main extends Component {
  render() {
    return (
      <div id="main-page">
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Main;
