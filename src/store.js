// Boiler plate store file for Redux Store

// crateStore is required for Redux store
// applyMiddleware is brought in because thunk middleware will be used
import { createStore, applyMiddleware } from 'redux';
// for Redux devtools
import { composeWithDevTools } from 'redux-devtools-extension';
// middleware -it is a middleware that looks at every action that passes through the system, and if it’s a function, it calls that function.
import thunk from 'redux-thunk';
// root for multiple reducers reaching out reducers folder
import rootReducer from './reducers';

// all intial state will be in the reducers, so it will be an empty object here
const initialState = {};

const middleware = [thunk];

// create the store with the arguments
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
