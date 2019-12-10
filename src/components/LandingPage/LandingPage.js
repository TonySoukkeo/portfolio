import React, { Component } from "react";
import MainPage from "../MainPage/MainPage";

class LandingPage extends Component {
  state = {
    btnClicked: false
  };

  btnClick = () => {
    const { btnClicked } = this.state;
    this.setState({
      btnClicked: !btnClicked
    });
  };

  render() {
    const { btnClicked } = this.state;
    return (
      <div className="landing-page">
        <div className="landing-page__content">
          <header className="landing-page__header">
            {/** HEADER **/}
            <h1 className="heading-1 heading-1--large">
              Tony Soukkeo<span className="landing-page__text-style">.</span>{" "}
            </h1>
          </header>
        </div>
        <h2 className="heading-2 heading-2--medium">Front End Web Developer</h2>
        {/** LANDING PAGE BTN **/}
        <input
          id="btn-toggle"
          type="checkbox"
          className="btn-toggle__checkbox"
        />
        <label
          onClick={this.btnClick}
          htmlFor="btn-toggle"
          className="btn-toggle"
        >
          <div className="btn-toggle__text">
            {btnClicked ? "Close" : "View"}
          </div>
        </label>
        <div className="btn-toggle__background">&nbsp;</div>
        {/** MAIN CONTENT BACKGROUND **/}
        <MainPage />
      </div>
    );
  }
}

export default LandingPage;
