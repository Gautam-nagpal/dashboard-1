import React, { Component } from "react";
import List from "@material-ui/core/List";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "200px",
    maxWidth: "200px",
    backgroundColor: theme.palette.background.paper
  }
});

class Collectiondatadata extends Component {
  state = {};

  details = index1 => {
    this.props.collectiondatadetailsindex(this.props.index1);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="collectiondata-data ">
        <div className={classes.root}>
          <List component="nav">
            <button className="w3-bar-item w3-button" onClick={this.details}>
              {this.props.da.map((finaldata, index1) => {
                return (
                  <div key={index1}>
                    <ListItem button>
                      <ListItemText>{finaldata.title}</ListItemText>
                    </ListItem>
                  </div>
                );
              })}
            </button>

            <Divider />
          </List>
        </div>
      </div>
    );
  }
}

Collectiondatadata.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Collectiondatadata);
