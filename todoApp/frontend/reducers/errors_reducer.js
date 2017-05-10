import {RECEIVE_ERRORS, receiveErrors} from './../actions/error_actions';
import {CLEAR_ERRORS, clearErrors} from './../actions/error_actions';

const errorsReducer = (state = [], action) => {
  let newState = [];
  switch (action.type) {
    case RECEIVE_ERRORS:
      newState = action.errors;
      return newState;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
