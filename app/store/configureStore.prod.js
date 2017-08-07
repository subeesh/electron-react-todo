import { createStore, applyMiddleware } from "redux";
import {
  forwardToMain,
  replayActionRenderer,
  getInitialStateRenderer
} from "electron-redux";
import rootReducer from "../reducers";

const enhancer = applyMiddleware(forwardToMain);

const configureStore = () => {
  const store = createStore(rootReducer, getInitialStateRenderer(), enhancer);

  replayActionRenderer(store);

  return store;
};

export default { configureStore };
