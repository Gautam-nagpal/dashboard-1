import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Addcollection } from "../action/action";
import Collections from "./collections";
import a from "../images/a.jpeg";

const styles = {
  row: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 100,
    height: 100
  }
};

//
//

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
      let result = this.props.value.find(
        data => data.title === this.state.title
      );
      if (!result) {
        Addcollection(this.state);
        this.setState({ title: "" });
      }
      this.setState({ title: "" });
    }
  };

  render() {
    const { classes } = this.props;
    let { logindata } = this.props;

    return (
      <div>
        <div className={classes.row}>
          <Avatar
            alt="Adelle Charles"
            src={a}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
        </div>
        <h2>{logindata.username}</h2>
        <p>{logindata.email}</p>
        <br />
        <div className="w3-sidebar" style={{ height: "63.6vh" }}>
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

          <form className="sidebar-down" onSubmit={this.addcollection}>
            {this.state.toggle ? (
              <input
                className="collection-input1 "
                type="text"
                name="title"
                autoComplete="off"
                value={this.state.title}
                onChange={this.change}
              />
            ) : (
              <button type="submit" className="collection-button ">
                Add collection
              </button>
            )}
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

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Sidebar));
