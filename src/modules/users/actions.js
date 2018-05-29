import * as t from './actionTypes';
import { baseUrl } from 'config';

export const loadUsers = () => {
  return (dispatch) => {
    dispatch({
      type: t.LOAD_USERS.REQUEST,
    })
    fetch(`${baseUrl}/users`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: can't load users list`);
        }
        return response.json();
      })
      .then(users => {
        dispatch({
          type: t.LOAD_USERS.SUCCESS,
          payload: users,
        })
      })
      .catch(error => {
        dispatch({
          type: t.LOAD_USERS.FAIL,
          payload: error.message,
        })
      });
  }
}