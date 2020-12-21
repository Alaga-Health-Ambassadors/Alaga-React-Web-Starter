import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100vw',
    height: '100vh',
  },
});

const Main = props => {

  const { 
    authentication,
    classes 
  } = props;

  return (
    <div className={classes.root}>
      <TextField id="standard-basic" label="Standard" />
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authentication: state.authentication
  };
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));
