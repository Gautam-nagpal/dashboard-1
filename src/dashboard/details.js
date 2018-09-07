import React, { Component } from "react";
import { connect } from "react-redux";
import { Adddetails } from "../action/action.js";
import Showdetails from "./showdetails.js";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Deletedetails } from "../action/action.js";

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

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

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
  delete = e => {
    console.log("aa gyaasacasc", e);
    let { value, classindex, nameindex } = this.props;
    let detail = value[classindex].data[nameindex][0].details;

    if (detail.length === undefined) {
      Deletedetails(e, this.props.classindex, this.props.nameindex);
    }
  };

  form = () => {
    const { classes } = this.props;
    return (
      <Modal isOpen={this.state.toggle} style={customStyles}>
        <Grid container>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <input
                className="w3-bar-item  "
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
                value={this.state.name}
                onChange={this.change}
              />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <input
                className="w3-bar-item  "
                type="number"
                name="age"
                placeholder="Age"
                autoComplete="off"
                value={this.state.age}
                onChange={this.change}
              />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <input
                className="w3-bar-item  "
                type="number"
                name="phoneno"
                placeholder="Phone No"
                autoComplete="off"
                value={this.state.phoneno}
                onChange={this.change}
              />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <input
                className="w3-bar-item  "
                type="text"
                name="details"
                placeholder="Details"
                autoComplete="off"
                value={this.state.details}
                onChange={this.change}
              />
            </Paper>
          </Grid>
        </Grid>

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
          <Showdetails
            details={value[classindex].data[nameindex][0].details}
            delete={this.delete}
          />
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
Details.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Details));
