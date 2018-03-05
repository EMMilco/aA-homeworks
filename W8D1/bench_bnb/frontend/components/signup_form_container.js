import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "signup",
    currentUser: state.session.user
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(msp, mdp)(SessionForm);
