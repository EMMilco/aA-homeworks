import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class Greeting extends React.Component {

  handleLogout(){
    this.props.logout();
  }


  render() {
    const currentUser = this.props.currentUser;
    if (currentUser){
      return (
        <header>
          <div>
            <h1>Welcome!</h1>
            <button onClick={this.handleLogout.bind(this)}>Logout!</button>
          </div>
        </header>
      );
    } else {
      return (
        <header>
          <div>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
          </div>
        </header>
      );
    }
  }
}

export default Greeting;
