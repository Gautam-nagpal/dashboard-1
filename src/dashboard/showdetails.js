import React, { Component } from "react";

class Showdetails extends Component {
  state = {};
  render() {
    let { details } = this.props;
    return <div>{details ? <div>{details[0]}</div> : null}</div>;
  }
}

export default Showdetails;
