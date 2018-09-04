import React, { Component } from "react";
import { connect } from "react-redux";
import { Adddetails } from "../action/action.js";
import Showdetails from "./showdetails.js";

class Details extends Component {
  state = {
    details: "lion",
    age: "20",
    image: "not there"
  };

  adddetail = () => {
    Adddetails(this.state, this.props.classindex, this.props.nameindex);
  };
  render() {
    let { value } = this.props;
    if (
      value &&
      value[this.props.classindex] &&
      value[this.props.classindex].data &&
      value[this.props.classindex].data[this.props.nameindex] &&
      value[this.props.classindex].data[this.props.nameindex][0] &&
      value[this.props.classindex].data[this.props.nameindex][0].details &&
      value[this.props.classindex].data[this.props.nameindex][0].details[0] !=
        null
    ) {
      let { details } = value[this.props.classindex].data[
        this.props.nameindex
      ][0];
      console.log("yooooooo", details);
    }
    return (
      <div>
        {value &&
        value[this.props.classindex] &&
        value[this.props.classindex].data &&
        value[this.props.classindex].data[this.props.nameindex] ? (
          <div>
            <h1>hey</h1>
            <button onClick={this.adddetail}>add details</button>
            {/* {value[this.props.classindex].data[this.props.nameindex][0] &&
            value[this.props.classindex].data[this.props.nameindex][0]
              .details ? (
              <Showdetails
                value={this.props.value}
                details={
                  value[this.props.classindex].data[this.props.nameindex][0]
                    .details[0]
                }
              />
            ) : null} */}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state === undefined) {
    return {
      value: null
    };
  } else {
    return {
      value: state.collections
    };
  }
};

export default connect(mapStateToProps)(Details);
