import React, { Component } from "react";
import { connect } from "react-redux";
import { Addcollection } from "../action/action";
import Collections from "./collections";

class Sidebar extends Component {
  state = {
    title: "",
    data: [],
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
  addcollection = e => {
    e.preventDefault();
    this.toggle();
    if (this.state.toggle && this.state.title.trim()) {
      Addcollection(this.state);
      this.setState({ title: "" });
    }
  };
  render() {
    return (
      <div>
        <div
          className="w3-sidebar w3-light-grey w3-bar-block"
          style={{ width: "135px" }}
        >
          {this.props.value.map((data, index) => {
            return (
              <div key={index}>
                <Collections
                  collectiondataindex={this.props.collectiondataindex}
                  data={data}
                  index={index}
                />
              </div>
            );
          })}

          <form onSubmit={this.addcollection}>
            {this.state.toggle ? (
              <input
                className="w3-bar-item  sidebar-down"
                type="text"
                name="title"
                autoComplete="off"
                value={this.state.title}
                onChange={this.change}
              />
            ) : null}

            <button type="submit" className=" w3-button ">
              Add collection
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state === undefined) {
    return {
      value: [
        {
          title: "Default",
          data: ""
        }
      ]
    };
  } else {
    return {
      value: state.collections
    };
  }
};
export default connect(mapStateToProps)(Sidebar);
