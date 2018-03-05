import { merge } from 'lodash';
import * as APIUtil from '../util/session_api_util';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case APIUtil.RECEIVE_CURRENT_USER:
      return merge({}, state, action.user);
    default:
      return state;
  }
};
