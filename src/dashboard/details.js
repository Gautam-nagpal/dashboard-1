import React, { Component } from "react";
import { connect } from "react-redux";
import { Adddetails } from "../action/action.js";
import Showdetails from "./showdetails.js";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#eaefef"
  }
};

class Details extends Component {
  state = {
    name: "",
    age: "",
    phoneno: "",
    details: "",
    image: "",
    toggle: false
  };
  handleClose = e => {
    e.preventDefault();
    this.setState({
      toggle: false,
      age: ""
    });
  };
  toggle = e => {
    e.preventDefault();
    this.setState({ toggle: true });
  };
  change = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  adddetail = e => {
    e.preventDefault();
    if (
      this.state.name.trim() &&
      this.state.age.trim() &&
      this.state.phoneno.trim() &&
      this.state.details.trim()
    ) {
      Adddetails(this.state, this.props.classindex, this.props.nameindex);
      this.setState({
        name: "",
        age: "",
        phoneno: "",
        details: "",
        toggle: false
      });
    }
  };

  form = () => {
    return (
      <Modal isOpen={this.state.toggle} style={customStyles}>
        <input
          className="w3-bar-item  "
          type="text"
          name="name"
          placeholder="Age"
          autoComplete="off"
          value={this.state.name}
          onChange={this.change}
        />
        <input
          className="w3-bar-item  "
          type="number"
          name="age"
          placeholder="Age"
          autoComplete="off"
          value={this.state.age}
          onChange={this.change}
        />
        <input
          className="w3-bar-item  "
          type="number"
          name="phoneno"
          placeholder="Phone No"
          autoComplete="off"
          value={this.state.phoneno}
          onChange={this.change}
        />
        <input
          className="w3-bar-item  "
          type="text"
          name="details"
          placeholder="Details"
          autoComplete="off"
          value={this.state.details}
          onChange={this.change}
        />
        <button onClick={this.adddetail}>save</button>
        <button onClick={this.handleClose}>close</button>
      </Modal>
    );
  };
  render() {
    let { value } = this.props;
    let { classindex } = this.props;
    let { nameindex } = this.props;

    return (
      <div className="w3-detailbar">
        {//
        value &&
        value[classindex] &&
        value[classindex].data &&
        value[classindex].data[nameindex] ? (
          <div>
            {value[classindex].data[nameindex][0].details ? (
              <form>
                {this.state.toggle ? this.form() : null}

                <button className="collection-button" onClick={this.toggle}>
                  add information
                </button>
              </form>
            ) : null}
          </div>
        ) : null}
        {value &&
        value[classindex] &&
        value[classindex].data &&
        value[classindex].data[nameindex] &&
        value[classindex].data[nameindex][0] &&
        value[classindex].data[nameindex][0].details ? (
          <Showdetails details={value[classindex].data[nameindex][0].details} />
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
