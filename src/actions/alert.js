import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './constsants';

export const setAlert = (msg, alertType) => dispatch => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
};
