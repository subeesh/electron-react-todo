import * as types from "../../app/constants/todoActionTypes";
import * as actions from "../../app/actions/todo";

test("addTodo creates ADD_TODO action", () => {
  expect(actions.addTodo("Learn React")).toMatchSnapshot();
});

test("deleteTodo creates DELETE_TODO action", () => {
  expect(actions.deleteTodo(1)).toMatchSnapshot();
});

test("editTodo creates EDIT_TODO action", () => {
  expect(actions.editTodo(1, "Learn Redux")).toMatchSnapshot();
});

test("completeTodo creates COMPLETE_TODO action", () => {
  expect(actions.completeTodo(1)).toMatchSnapshot();
});

test("completeAll creates COMPLETE_ALL action", () => {
  expect(actions.completeAll()).toEqual({
    payload: null,
    type: "COMPLETE_ALL"
  });
});

test("clearCompleted creates CLEAR_COMPLETED action", () => {
  expect(actions.clearCompleted()).toEqual({
    payload: null,
    type: "CLEAR_COMPLETED"
  });
});
