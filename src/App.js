import React from "react";
import Banner from "./components/banner/Banner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route>
            <Banner />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
