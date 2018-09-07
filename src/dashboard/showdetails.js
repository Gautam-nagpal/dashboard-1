import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Showdetails extends Component {
  state = {
    details: []
  };

  render() {
    let { details } = this.props;
    const { classes } = this.props;

    return (
      <div>
        <button
          onClick={() => {
            this.props.delete(this.state.details);
          }}
        >
          delete
        </button>
        {details.length === undefined ? (
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <p>Name ={details.name}</p>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <p>Age ={details.age}</p>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <p>phone No ={details.phoneno}</p>
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <p>Details ={details.details}</p>
              </Paper>
            </Grid>
          </Grid>
        ) : null}
      </div>
    );
  }
}

Showdetails.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Showdetails);
