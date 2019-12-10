import React from "react";

const Skills = () => {
  return (
    <React.Fragment>
      <div className="skills__1">
        <i className="fab fa-html5" />
        <div className="skills__text">html 5</div>
      </div>

      <div className="skills__2">
        <i className="fab fa-css3-alt" />
        <div className="skills__text">Css 3</div>
      </div>

      <div className="skills__3">
        <i className="fab fa-js" />
        <div className="skills__text">JavaScript</div>
      </div>

      <div className="skills__4">
        <i className="fab fa-react" />
        <div className="skills__text">React JS</div>
      </div>

      <div className="skills__5">
        <i className="fab fa-bootstrap" />
        <div className="skills__text">Bootstrap</div>
      </div>
      <div className="skills__6">
        <i className="fab fa-sass" />
        <div className="skills__text">Sass</div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
