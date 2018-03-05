import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user).then((payload) => {
      return dispatch(receiveCurrentUser(payload));
    });
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return APIUtil.signup(user).then((payload) => {
      return dispatch(receiveCurrentUser(payload));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    return APIUtil.logout().then(() => {
      return dispatch(receiveCurrentUser(null));
    });
  };
};
