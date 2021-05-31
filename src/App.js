import React, { Component } from "react";
import AdventurePage from "./Components/AdventurePage.js";
import "./App.css";
import Navbar from "./Components/NavBar.js";
import { Switch, Route, withRouter } from "react-router-dom";
import Signup from "./Components/Signup.js";

class App extends Component {

  state = {
    users: []
  }

  createUser = (e, user) => {
    e.preventDefault()
    const { name, hometown, bio, age } = user;
    const newUser = {
      name, 
      hometown, 
      bio,
      age,
    };
    e.target.reset();
    fetch("http://localhost:3000/users", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newUser)
    })
    .then((res) => res.json())
    .then((user) => {
      this.setState({
        user: [user, ...this.state.user]
      })
    })
  }



  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={AdventurePage} /> 
          <Route path="/signup" render={()=><Signup/>}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

// <AdventurePage />
