import {createStore, applyMiddleware} from 'redux';
import rootReducer from './../reducers/root_reducer';
import Thunk from './../middleware/thunk';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(Thunk));
  return store;
};

export default configureStore;
