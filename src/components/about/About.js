import React from "react";

const About = () => {
  return (
    <div id="about" className="container">
      <div className="row">
        <div className="col-md-5">
          <div
            style={{
              marginTop: "100px"
            }}
            className="card"
          >
            <div className="card-body  card-styling">
              <div id="profile-image">
                <img src="/assets/profile.jpg" alt="profile" />
              </div>
              <p>
                Hello! My name is Tony Soukkeo, and I am a front end web
                developer! I am very passionate about what I do, as I find it
                super rewarding, designing and deploying a small idea, into
                something bigger that can be seen by the whole world!
              </p>
              <p>
                When I'm not coding, you can find me usually find me doing a
                little bit of indoor bouldering.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div id="skills" className="container">
            <div className="row">
              <div className="col-md-6">
                <div id="languages">
                  <h1 className="text-center">Languages</h1>
                  <div id="css-block">
                    <i className="fab fa-css3-alt" /> CSS 3
                  </div>
                  <div id="html-block">
                    <i className="fab fa-html5" /> HTML 5
                  </div>
                  <div id="javascript-block">
                    <i className="fab fa-js-square" /> Javascript
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div id="frameworks">
                  <h1 className="text-center">Frameworks / Libraries</h1>
                  <div id="react-block">
                    <i className="fab fa-react" /> React
                  </div>
                  <div id="bootstrap-block">
                    <i className="fab fa-bootstrap" /> Bootstrap
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
