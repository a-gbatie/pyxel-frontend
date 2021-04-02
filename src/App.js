import React, { Component } from "react";
import AdventurePage from "./Components/AdventurePage.js";
import "./App.css";
import Navbar from "./Components/NavBar.js";
import { Switch, Route, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={AdventurePage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

// <AdventurePage />
