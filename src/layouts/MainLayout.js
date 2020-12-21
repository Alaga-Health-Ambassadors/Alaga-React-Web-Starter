import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import { bindActionCreators } from "redux";
import { connect, useSelector, useDispatch } from "react-redux";

const MainLayout = props => {

  const { children } = props;

  return (
    <Fragment>
      <main>
        {children}
      </main>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    authentication: state.authentication,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);
