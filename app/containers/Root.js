import React from "react";
import { Provider } from "react-redux";
import TodoPage from "./TodoPage";

export default function Root({ store, history }) {
  return (
    <Provider store={store}>
      <TodoPage />
    </Provider>
  );
}
