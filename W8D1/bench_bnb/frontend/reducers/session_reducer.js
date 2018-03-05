import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER} from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const newState = {};
      newState.user = action.user;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
