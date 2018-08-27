import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./components/login.js";
import Signup from "./components/signup.js";
import Forgot from "./components/forgot.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch align="center" id="root">
          <Route exact path="/" component={Signup} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Forgot" component={Forgot} />
        </Switch>
      </div>
    );
  }
}

export default App;
