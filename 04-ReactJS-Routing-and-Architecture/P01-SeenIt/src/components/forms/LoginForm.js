import React, { Component } from 'react';

import Input from './Input';
import AuthService from '../../utilities/authService';
import observerService from '../../utilities/observerService';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    AuthService.login(this.state.username, this.state.password)
      .then((res) => {
        AuthService.saveSession(res);
        observerService.trigger(observerService.events.loginUser, AuthService.getUsername());
        observerService.trigger(observerService.events.notification, {type: 'success', message: 'Logged in Successfully!'});
        this.props.history.push('/catalog');
      }).catch(() => {
        observerService.trigger(observerService.events.notification, {type: 'error', message: 'Invalid Credentials!'});
      });
  }

  render() {
    return (
      <form id="loginForm" onSubmit={this.handleFormSubmit}>
        <h2>Sign In</h2>
        <label>Username:</label>
        <Input
          type="text"
          name="username"
          value={this.state.username}
          func={this.handleChange}
        />
        <label>Password:</label>
        <Input
          type="password"
          name="password"
          value={this.state.password}
          func={this.handleChange}
        />
        <input id="btnLogin" value="Sign In" type="submit" />
      </form>
    );
  }
}

export default LoginForm;