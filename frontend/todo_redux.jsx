import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import allTodos from './reducers/selectors';
import {receiveTodos} from './actions/todo_actions';
import {receiveTodo} from './actions/todo_actions';
import {removeTodo} from './actions/todo_actions';
import {receiveStep, receiveSteps, removeStep} from './actions/step_actions';


import App from './components/app';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", function(){
  const store = createStore();
  // TODO: remove later
  window.store = store;
  window.allTodos = allTodos;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;
  window.receiveStep = receiveStep;
  window.receiveSteps = receiveSteps;
  window.removeStep = removeStep;

  ReactDOM.render(<Root store = {store} />, document.getElementById('content'));
});
