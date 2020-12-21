import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import registerServiceWorker from "./registerServiceWorker";
import { loadReCaptcha } from 'react-recaptcha-google'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import App from "./App";
import { store, persistor } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById("root")
);

loadReCaptcha();
registerServiceWorker();
