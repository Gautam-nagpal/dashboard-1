import React, { Component } from "react";

class Showdetails extends Component {
  state = {};
  render() {
    let { details } = this.props;

    return (
      <div>
        {details.length === undefined ? (
          <div>
            <p>Name ={details.name}</p>
            <p>Age ={details.age}</p>
            <p>phone No ={details.phoneno}</p>
            <p>Details ={details.details}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Showdetails;
