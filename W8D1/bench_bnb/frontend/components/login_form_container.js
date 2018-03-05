import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../actions/session_actions';



const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "login",
    currentUser: state.session.user
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(msp, mdp)(SessionForm);
