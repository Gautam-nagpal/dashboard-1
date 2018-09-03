import React, { Component } from "react";
import Dash from "./dash";

class Dashboard extends Component {
  state = {};

  componentWillMount() {
    if (localStorage.getItem("logindata")) {
    } else {
      this.props.history.push("/Login");
    }
  }
  logout = e => {
    e.preventDefault();
    localStorage.removeItem("logindata");
    this.props.history.push("/Login");
  };

  //
  //

  render() {
    return (
      <div>
        <Dash logout={this.logout} />
      </div>
    );
  }
}

export default Dashboard;
