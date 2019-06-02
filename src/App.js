import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Main from "./components/main/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Banner} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <Navbar />
              <Switch>
                <Route exact path="/about" component={Main} />
              </Switch>
            </div>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
