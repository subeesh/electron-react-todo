import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from "../constants/todoActionTypes";

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.payload
        },
        ...state
      ];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);

    case EDIT_TODO:
      return state.map(
        todo =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
      );

    case COMPLETE_TODO:
      return state.map(
        todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
      );

    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }));

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
}
