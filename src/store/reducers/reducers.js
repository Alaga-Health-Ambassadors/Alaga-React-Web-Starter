import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

import authenticationReducer from "./authentication.reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authentication']
};

const rootReducer = combineReducers({
  // authentication: authenticationReducer,
});

export default persistReducer(persistConfig, rootReducer);
