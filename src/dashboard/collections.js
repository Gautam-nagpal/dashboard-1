import React, { Component } from "react";

class Collections extends Component {
  state = {};
  collectiondata = e => {
    this.props.collectiondataindex(this.props.data, e);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <ul
            onClick={() => {
              this.collectiondata(this.props.index);
            }}
            className="w3-bar-item w3-button"
          >
            {this.props.data.title}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Collections;
