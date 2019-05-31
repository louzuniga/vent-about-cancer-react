import axios from 'axios';
import { setAlert } from './alert';
import storeAuthToken from '../utils/storeAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_AUTH,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT
} from './constsants';

// Authenticated User
export const userAuth = () => async dispatch => {
  if (localStorage.token) {
    storeAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('http://localhost:5000/api/auth');

    dispatch({
      type: USER_AUTH,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Sign Up User****************************
export const signup = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // conver to a string and prepare to send data
  const body = JSON.stringify({ name, email, password });

  try {
    // post to back end using axios
    const res = await axios.post(
      'http://localhost:5000/api/users',
      body,
      config
    );

    // if post is successful
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(userAuth());
  } catch (err) {
    // retrieve array of errors by looping through them
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    // if post fails
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User*********************
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // conver to a string and prepare to send data
  const body = JSON.stringify({ email, password });

  try {
    // post to back end using axios
    const res = await axios.post(
      'http://localhost:5000/api/auth',
      body,
      config
    );

    // if post is successful
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(userAuth());
  } catch (err) {
    // retrieve array of errors by looping through them
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    // if post fails
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout and clear data
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
