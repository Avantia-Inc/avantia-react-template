import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import middleware from '../middleware';
/* import redux modules */

// noinspection JSUnresolvedVariable
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const exampleReducer = (state = null) => {
  return state;
};
const rootReducer = combineReducers({
  /* combine redux modules */
  exampleReducer,
});

const appState = {};

const store = createStore(
  rootReducer,
  appState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
