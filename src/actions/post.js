import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LOVE,
  DELETE_POST,
  ADD_POST,
  GET_POST
} from './constsants';
import { API_ORIGIN } from '../config';

// GET posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get(`${API_ORIGIN}/api/posts`);

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Love
export const addLove = id => async dispatch => {
  try {
    const res = await axios.put(`${API_ORIGIN}/api/posts/love/${id}`);

    dispatch({
      type: UPDATE_LOVE,
      payload: { id, love: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Unlove
export const unLove = id => async dispatch => {
  try {
    const res = await axios.put(`${API_ORIGIN}/api/posts/unlove/${id}`);

    dispatch({
      type: UPDATE_LOVE,
      payload: { id, love: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delet Post
export const deletePost = id => async dispatch => {
  try {
    axios.delete(`${API_ORIGIN}/api/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id
    });

    dispatch(setAlert('Community Post Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Post
export const addPost = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(`${API_ORIGIN}/api/posts`, formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data
    });

    dispatch(setAlert('Community Post Created', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// GET post
export const getPost = id => async dispatch => {
  try {
    const res = await axios.get(`${API_ORIGIN}/api/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
