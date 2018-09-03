import React, { Component } from "react";
import Header from "./header.js";
import Sidebar from "./sidebar.js";

class Dash extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header logout={this.props.logout} />
        <Sidebar />
      </div>
    );
  }
}

export default Dash;
