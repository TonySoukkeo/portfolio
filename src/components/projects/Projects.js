import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <h1>
          My{" "}
          <span
            style={{
              color: "#00adef"
            }}
          >
            {" "}
            Work.
          </span>
        </h1>
        <div className="row m-auto">
          <div
            style={{
              marginBottom: "20px"
            }}
            className="col-lg-4 p-0"
          >
            <div className="flip-card card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="dimmed">
                    <div id="project1">
                      <div className="container">
                        <div className="row">
                          <div className="card-btn">View</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-body">
                    <h4 className="text-center">HL: Bouldering League</h4>
                    <p>
                      Climbing web application used to keep track of total
                      points in a given season, along with leaderboards,
                      personal profile, and a comment section for each climbing
                      route, to converse with other climbers!
                    </p>

                    <p>
                      <b>
                        Built with React.js, using Google Firebase/Firestore API
                        for the backend and database.
                      </b>
                    </p>
                    <hr />

                    <div className="row">
                      <div className="ml-auto">
                        <a
                          style={{
                            marginRight: "9px",
                            color: "#2e8ecd"
                          }}
                          href="https://hlboulderingleague.com/"
                          target="_blank"
                        >
                          View Site
                        </a>
                        <a
                          style={{
                            marginRight: "9px",
                            color: "#2d2d2d"
                          }}
                          href="https://github.com/TonySoukkeo/BoulderingLeague"
                          target="_blank"
                        >
                          <b> Github </b> <i className="fab fa-github" />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              marginBottom: "20px"
            }}
            className="col-lg-4 p-0"
          >
            <div className="flip-card card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="dimmed">
                    <div id="project2">
                      <div className="container">
                        <div className="row">
                          <div className="card-btn">View</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-body">
                    <h4 className="text-center">
                      Family Connections: Calculator
                    </h4>

                    <p>
                      Calculator for local child care provider. Calculates wage
                      and hours based on the clients frequency of pay, number of
                      hours, and hourly wage.
                    </p>
                    <p>
                      Also has an option to switch the calculation type based on
                      schooling.
                    </p>
                    <hr />

                    <div className="row">
                      <div className="ml-auto">
                        <a
                          style={{
                            marginRight: "9px",
                            color: "#2e8ecd"
                          }}
                          href="https://polar-river-61987.herokuapp.com/"
                          target="_blank"
                        >
                          View Site
                        </a>
                        <a
                          style={{
                            marginRight: "9px",
                            color: "#2d2d2d"
                          }}
                          href="https://github.com/TonySoukkeo/FamilyConnectionsCalculator"
                          target="_blank"
                        >
                          <b> Github </b> <i className="fab fa-github" />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              marginBottom: "20px"
            }}
            className="col-lg-4 p-0"
          >
            <div className="flip-card card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="dimmed">
                    <div id="project3">
                      <div className="container">
                        <div className="row">
                          <div className="card-btn">View</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-body">
                    <h4 className="text-center">Hunter Schmidt Drywall</h4>

                    <p>
                      Website for drywall contractor that showcases their work
                      in a neat and simple form.
                    </p>
                    <p>
                      Along with a calculator to showcase an estimated cost on a
                      project, based on the square footage.
                    </p>
                    <hr />

                    <div className="row">
                      <div className="ml-auto">
                        <a
                          style={{
                            marginRight: "9px",
                            color: "#2e8ecd"
                          }}
                          href="https://polar-river-61987.herokuapp.com/"
                          target="_blank"
                        >
                          View Site
                        </a>
                        <a
                          style={{
                            marginRight: "9px",
                            color: "#2d2d2d"
                          }}
                          href="https://github.com/TonySoukkeo/HSDrywall"
                          target="_blank"
                        >
                          <b> Github </b> <i className="fab fa-github" />{" "}
                        </a>
                      </div>
                    </div>
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

export default Projects;
