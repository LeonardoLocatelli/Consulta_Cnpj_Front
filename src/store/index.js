import { createStore, applyMiddleware, compose } from "redux";
import storeSynchronize from "redux-localstore";
import thunk from "redux-thunk";
import logger from "redux-logger";

import combinedReducers from "./combinedReducers";

const middleware = [thunk];
const useLogger = process.env.REACT_APP_USE_REDUX_LOGGER;

if (process.env.NODE_ENV === "development" && useLogger !== "false") {
  middleware.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;

storeSynchronize(store, {
  blacklist: ["messages"],
});
