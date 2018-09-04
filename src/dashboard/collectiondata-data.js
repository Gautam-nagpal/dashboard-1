import React, { Component } from "react";

class Collectiondatadata extends Component {
  state = {};

  details = index1 => {
    this.props.collectiondatadetailsindex(this.props.index1);
  };
  render() {
    return (
      <div className="collectiondata-data " style={{ width: "135px" }}>
        <button className="w3-bar-item w3-button">
          {this.props.da.map((finaldata, index1) => {
            return (
              <div onClick={this.details} key={index1}>
                {finaldata.title}
              </div>
            );
          })}
        </button>
      </div>
    );
  }
}

export default Collectiondatadata;
