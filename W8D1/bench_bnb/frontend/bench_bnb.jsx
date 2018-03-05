import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { login, logout } from './actions/session_actions';

import { fetchBenches } from './actions/bench_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { user: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //testing
  window.fetchBenches = fetchBenches;
  window.login = login;
  window.logout = logout;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  //end testing

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
