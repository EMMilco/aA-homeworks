import React from 'react';

class Greeting extends React.Component {
  render() {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;
    return (
      <header>
        <div>
          {currentUser && <p>Welcome {currentUser.username}</p>}
          {currentUser && <button onClick={logout}>Logout!</button>}
          {currentUser || <Link to='/signup'></Link>}
          {currentUser || <Link to='/login'></Link>}
        </div>
      </header>
    );
  }
}

export default Greeting;
