import React, { Component } from "react"
import AdventurePage from "./components/AdventurePage.js"
import './App.css';

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
