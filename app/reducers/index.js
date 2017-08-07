import { combineReducers } from "redux";
import todos from "./todo";

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
