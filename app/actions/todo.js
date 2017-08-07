import * as types from "../constants/todoActionTypes";

export const addTodo = text => ({ type: types.ADD_TODO, payload: text });
export const deleteTodo = id => ({ type: types.DELETE_TODO, payload: id });
export const editTodo = (id, text) => ({
  type: types.EDIT_TODO,
  payload: { id, text }
});
export const completeTodo = id => ({ type: types.COMPLETE_TODO, payload: id });
export const completeAll = () => ({ type: types.COMPLETE_ALL, payload: null });
export const clearCompleted = () => ({
  type: types.CLEAR_COMPLETED,
  payload: null
});
