import React, { Component } from "react";
import About from "../about/About";
import Projects from "../projects/Projects";

class Main extends Component {
  render() {
    return (
      <div id="main-page">
        <About />
        <Projects />
      </div>
    );
  }
}

export default Main;
