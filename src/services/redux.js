import { combineReducers } from 'redux';

import users from 'modules/users/reducer';
import posts from 'modules/posts/reducer';

export default combineReducers({
  users,
  posts,
})