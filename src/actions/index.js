import { API_ORIGIN } from '../config';

// Get list of users who logged in
export const users = user => dispatch => {
  fetch(`${API_ORIGIN}/api/users`, {
    mode: 'cors',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(res => {
      dispatch(users(res.users));
    });
};
