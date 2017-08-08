import todos from "../../app/reducers/todo";
import * as types from "../../app/constants/todoActionTypes";

test("handles initial state", () => {
  expect(todos(undefined, {})).toEqual([]);
});

test("handles ADD_TODO", () => {
  expect(
    todos([], {
      type: types.ADD_TODO,
      payload: "Learn Redux"
    })
  ).toMatchSnapshot();
});

test("handles DELETE_TODO", () => {
  expect(
    todos(
      [
        {
          text: "Learn React",
          completed: false,
          id: 1
        },
        {
          text: "Learn Redux",
          completed: false,
          id: 0
        }
      ],
      {
        type: types.DELETE_TODO,
        payload: 1
      }
    )
  ).toMatchSnapshot();
});

test("handles EDIT_TODO", () => {
  expect(
    todos(
      [
        {
          text: "Learn Electr",
          completed: false,
          id: 1
        }
      ],
      {
        type: types.EDIT_TODO,
        text: "Learn Electron",
        payload: 1
      }
    )
  ).toMatchSnapshot();
});

test("handles COMPLETE_ALL", () => {
  expect(
    todos(
      [
        {
          text: "Learn ES6",
          completed: true,
          id: 1
        },
        {
          text: "Learn Webpack",
          completed: false,
          id: 0
        }
      ],
      {
        type: types.COMPLETE_ALL
      }
    )
  ).toMatchSnapshot();
});

test("handles CLEAR_COMPLETED", () => {
  expect(
    todos(
      [
        {
          text: "Learn ES6",
          completed: true,
          id: 1
        },
        {
          text: "Learn Electron",
          completed: false,
          id: 0
        }
      ],
      {
        type: types.CLEAR_COMPLETED
      }
    )
  ).toMatchSnapshot();
});
