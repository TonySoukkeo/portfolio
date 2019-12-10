import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/style.css";

function App() {
  return (
    <Router>
      <LandingPage />
    </Router>
  );
}

export default App;
