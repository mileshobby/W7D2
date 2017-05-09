import {RECEIVE_TODO, receiveTodo} from "./../actions/todo_actions";
import {RECEIVE_TODOS, receiveTodos} from "./../actions/todo_actions";
import {REMOVE_TODO, removeTodo} from "./../actions/todo_actions";
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    steps: [
      "step1", "something else", ":)"
    ],
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  const newState = {};
  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      // debugger
      merge(newState, state);
      newState[action.todo.id] = action.todo;
      return newState;
    case REMOVE_TODO:
      // debugger
      merge(newState, state);
      delete( newState[action.id] );
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
