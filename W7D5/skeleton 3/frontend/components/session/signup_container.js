import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

const mapDispatchToProps = (dispatch) => ({
  createNewUser: formUser => dispatch(creatNewUser(formUser))
});

export default connect(null, mapDispatchToProps)(Signup);
