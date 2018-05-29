import * as t from './actionTypes';

const initialState = {
  users: null,
  fetchingUsers: false,
  fetchingUsersError: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.LOAD_USERS.REQUEST:
      return {
        ...state,
        fetchingUsers: true,
        fetchingUsersError: '',
      }
    case t.LOAD_USERS.SUCCESS:
      return {
        ...state,
        fetchingUsers: false,
        users: action.payload,
      }
    case t.LOAD_USERS.FAIL:
      return {
        ...state,
        fetchingUsers: false,
        fetchingUsersError: action.payload,
      }

    default:
      return state;
  }
}