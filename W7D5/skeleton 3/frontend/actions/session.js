import * as APIUtil from '../utils/session.js';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = user => ({
  type: RECIEVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const createNewUser = formUser => dispatch => {
  postUser(formUser).then(user => dispatch(receiveCurrentUser(user)))};

export const login = formUser => dispatch => {
  postSession(formUser).then(user => dispatch(receiveCurrentUser(user)))};

export const logout = () => dispatch => {
  deleteSession().then(() => dispatch(logoutCurrentUser()))
};