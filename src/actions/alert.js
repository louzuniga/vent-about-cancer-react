import uuid from 'uuid';
// eslint-disable-next-line
import { SET_ALERT, REMOVE_ALERT } from './constsants';

// dispatch
export const setAlert = (msg, alertType, timeout = 3000) => dispatch => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
