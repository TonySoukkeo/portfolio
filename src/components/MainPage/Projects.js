import React from "react";

const projects = [
  {
    id: 1,
    name: "Facebook clone app",
    mainDesc:
      "A mini Facebook clone app. Users are able to create, delete, update posts. Along with adding friends and messaging. Comes with realtime updates for posts and notifications.",
    subDesc: "Built using the MERN stack, and socket IO for realtime updates",
    github: "https://github.com/TonySoukkeo/facebook-clone",
    website: "https://fbcloneapp.herokuapp.com/"
  },
  {
    id: 2,
    name: "Hi Line Bouldering League",
    mainDesc:
      "Climbing web application used to keep track of totalpoints in a given session, along with leaderboards,personal profile, achievements, etc",
    subDesc:
      "Built with React.js using Google Firebase/Firestore API for the database.",
    github: "https://github.com/TonySoukkeo/BoulderingLeague",
    website: "https://hlboulderingleague.com/"
  },
  {
    id: 3,
    name: "Anime Search",
    mainDesc:
      "Search anime / manga, along with getting user reviews,trailers, related anime, and seeing top manga / anime.",
    subDesc:
      "Use of unofficial MyAnimeList API, using ES6 Fetch, Async / Await, etc.",
    github: "https://github.com/TonySoukkeo/animesearch",
    website: "https://tonysoukkeo.github.io/animesearch/"
  },
  {
    id: 4,
    name: "Family Connections Calculator",
    mainDesc:
      " Calculator for local child care provider. Calculates wage and hours based on the clients frequency of pay, number of hours, and hourly wage.",
    subDesc:
      "Also has an option to switch the calculation type based on schooling. With use of Redux for state management.",
    github: "https://github.com/TonySoukkeo/FamilyConnectionsCalculator",
    website: "https://TonySoukkeo.github.io/FamilyConnectionsCalculator"
  },
  {
    id: 5,
    name: "Hunter Schmidt Drywall",
    mainDesc:
      "Website for drywall contractor that showcases their work in a neat and simple form.",
    subDesc:
      "Along with a calculator to showcase an estimated cost on a project, based on the square footage.",
    github: "https://github.com/TonySoukkeo/HSDrywall",
    website: "https://www.schmidtdrywall.com/"
  },
  {
    id: 6,
    name: "Scandal Tribute",
    mainDesc:
      "Of course I would have to add in a personal fun project in here! This page is a tribute to Scandal, an all girl rock band from Japan.",
    subDesc:
      "Laid out beautifully in a modern and slick look, responsive, and with some nice subtle animations. No frameworks used, built using pure html, css, and javascript.",
    github: "https://github.com/TonySoukkeo/ScandalTribute",
    website: "https://tonysoukkeo.github.io/ScandalTribute/"
  }
];

const Projects = () => {
  return (
    <React.Fragment>
      <div className="projects__container">
        <div className="projects__header">Projects</div>
        {projects.map(project => (
          <div className={`project project--${project.id}`}>
            <div className="project__card">
              <div className="project__card--front">
                <div
                  className={`project__card-image project__card-image-${project.id}`}
                >
                  &nbsp;
                </div>
                <div className="project__card-text">
                  <div
                    className={`project__card-header project__card-header--${project.id}`}
                  >
                    <h3>{project.name}</h3>
                  </div>
                  <div className="project__card-text">
                    <p>{project.mainDesc}</p>
                    <br />
                    <p>
                      <strong>{project.subDesc}</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`project__card--back project__card--back-${project.id}`}
              >
                <div className="project__card--back-github mb-medium">
                  <h3 className="heading-3 mb-small">Github Link:</h3>
                  <a href={`${project.github}`} target="_blank">
                    <i className="fab fa-github" />
                  </a>
                </div>

                <div className="project__card--back-website">
                  <a href={`${project.website}`} target="_blank">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Projects;
