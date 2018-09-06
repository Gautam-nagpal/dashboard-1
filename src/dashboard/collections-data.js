import React, { Component } from "react";
import Collectiondatadata from "./collectiondata-data";
import { Addcollection_data } from "../action/action.js";

class Collectiondata extends Component {
  state = {
    title: "",
    details: [],
    toggle: false
  };

  change = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  toggle = e => {
    let { toggle } = this.state;
    this.setState({ toggle: !toggle });
  };
  addData1 = e => {
    e.preventDefault();
    this.toggle();
    let datacoming;
    datacoming = [...this.props.data, this.state];
    if (this.toggle && this.state.title.trim()) {
      Addcollection_data(datacoming, this.props.index);
      this.setState({
        title: ""
      });
    }
  };
  render() {
    return (
      <div className="w3-collectionbar">
        <h1 align="center">{this.props.data.title}</h1>
        <div>
          {this.props.data ? (
            <form onSubmit={this.addData1}>
              {this.state.toggle ? (
                <input
                  className="collection-input"
                  type="text"
                  name="title"
                  autoComplete="off"
                  value={this.state.title}
                  onChange={this.change}
                />
              ) : (
                <button type="submit" className="collection-button">
                  Add details
                </button>
              )}
            </form>
          ) : null}
        </div>

        {this.props.data && this.props.data.data && this.props.data.data.length
          ? this.props.data.data.map((da, index) => {
              return (
                <div key={index}>
                  <Collectiondatadata
                    da={da}
                    index1={index}
                    collectiondatadetailsindex={
                      this.props.collectiondatadetailsindex
                    }
                  />
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default Collectiondata;
