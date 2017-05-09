import { RECEIVE_STEPS, receiveSteps } from './../actions/step_actions';
import { RECEIVE_STEP, receiveStep } from './../actions/step_actions';
import { REMOVE_STEP, removeSteps } from './../actions/step_actions';
import merge from 'lodash/merge';
const initialState = {
  1: { // this is the step with id = 1
    id: 1,
    title: "walk to store",
    done: false,
    todo_id: 1
  },
  2: { // this is the step with id = 2
    id: 2,
    title: "buy soap",
    done: false,
    todo_id: 1
  }
};

const StepsReducer = (state = initialState, action) => {
  const newState = {};
  switch(action.type) {
    case RECEIVE_STEPS:
      action.steps.forEach((step) => {
        newState[step.id] = step;
      });
      return newState;
    case RECEIVE_STEP:
      merge(newState, state);
      newState[action.step.id] = action.step;
      return newState;
    case REMOVE_STEP:
      merge(newState, state);
      let id = action.step.id;
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default StepsReducer;
