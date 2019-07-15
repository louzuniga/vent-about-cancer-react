// root reducer, which will combine all of the reducers

import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';

// takes all the reucers created
export default combineReducers({
  alert,
  auth,
  profile,
  post
});
