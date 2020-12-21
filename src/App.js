import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { connect } from "react-redux";

import MainLayout from "./layouts/MainLayout";

/** Import All Routes */
import CommonRoutes from './routes/routes';

/** Import Themes */
import DARK_THEME from "./theme/dark";
import DEFAULT from "./theme/default";

import { createBrowserHistory } from "history";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

/** Initial FontAwesome Brand Icons */
library.add(fab);

const history = createBrowserHistory();

const MainRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

const App = props => {

  const {
    authentication,
  } = props;

  return(
    <MuiThemeProvider theme={DEFAULT}>
      <CssBaseline />
      <div style={{ height: "100vh" }}>
        <Router history={history}>
          <Switch>
            {
              CommonRoutes.map((value, index) => {
                return(
                  <MainRoute key={index} path={value.path} component={value.component} />
                )
              })
            }
            <Redirect to={'/main'} />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  )
}

const mapStateToProps = state => {
  return {
    authentication: state.authentication,
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
