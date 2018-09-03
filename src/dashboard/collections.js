import React, { Component } from "react";

class Collections extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <ul className="w3-bar-item w3-button">{this.props.data.title}</ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Collections;
