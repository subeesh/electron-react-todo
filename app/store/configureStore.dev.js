import { createStore, applyMiddleware, compose } from "redux";
import {
  forwardToMain,
  replayActionRenderer,
  getInitialStateRenderer
} from "electron-redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";
import * as todoActions from "../actions/todo";

const configureStore = () => {
  // Redux Configuration
  const middleware = [forwardToMain];
  const enhancers = [];

  // Logging Middleware
  const logger = createLogger({
    level: "info",
    collapsed: true
  });
  middleware.push(logger);

  // Redux DevTools Configuration
  const actionCreators = {
    ...todoActions
  };
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
        actionCreators
      })
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  // Create Store
  const store = createStore(rootReducer, getInitialStateRenderer(), enhancer);

  if (module.hot) {
    module.hot.accept(
      "../reducers",
      () => store.replaceReducer(require("../reducers")) // eslint-disable-line global-require
    );
  }

  replayActionRenderer(store);

  return store;
};

export default { configureStore, history };
