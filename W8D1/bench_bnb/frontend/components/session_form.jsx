import React from 'react';
import { merge } from 'lodash';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.formTextGenerator();
  }

  handleSubmit(e){
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm({ user });
  }

  handleChange(input){
    return (e) => {
      return this.setState({[input]: e.currentTarget.value});
    };
  }

  formTextGenerator() {
    if (this.props.formType === "login") {
      this.formHeader = "Log In";
      this.linkText = "Click to Sign Up";
      this.linkPath = "/signup";
    } else {
      this.formHeader = "Sign Up";
      this.linkText = "Click to Log In";
      this.linkPath = "/login";
    }
  }




  render(){
    if (this.props.currentUser) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>{this.formHeader}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange("username")}
            value={this.state.username}
          ></input>

          <input
            type="password"
            onChange={this.handleChange("password")}
            value={this.state.password}
          ></input>
          {this.props.errors && this.props.errors.map(error => <li>{error}</li>)}
          <input type="submit" value={this.formHeader}></input>
        </form>
        <Link to={this.linkPath}>{this.linkText}</Link>
      </div>
    );
  }
}

export default withRouter(SessionForm);
