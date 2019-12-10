import React from "react";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const MainPage = () => {
  return (
    <main className="main-page">
      <nav className="navigation">
        <div className="navigation__logo">
          <img src="../assets/logo.png" alt="Logo" />
        </div>
        <div className="navigation__details">
          <img src="../assets/profile.jpg" alt="Tony Soukkeo Image" />
          <span className="navigation__details-name">Tony Soukkeo</span>
        </div>
      </nav>

      <section className="about">
        {/** ABOUT SECTION **/}
        <About />
      </section>

      {/** SKILLS SECTION **/}
      <section className="skills">
        <Skills />
      </section>

      {/** PROJECTS **/}
      <section className="projects">
        <Projects />
      </section>

      {/** CONTACT **/}
      <section className="contact">
        <Contact />
      </section>
    </main>
  );
};

export default MainPage;
