import React, { Component } from 'react';

import Input from './Input';
import AuthService from '../../utilities/authService';
import observerService from '../../utilities/observerService';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      confirmedPassword: ''
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

    AuthService.register(this.state.username, this.state.password)
      .then((res) => {
        AuthService.saveSession(res);
        observerService.trigger(observerService.events.loginUser, AuthService.getUsername());
        observerService.trigger(observerService.events.notification, {type: 'success', message: 'Logged in Successfully!'});
        this.props.history.push('/catalog');
      }).catch((err) => {
        observerService.trigger(observerService.events.notification, {type: 'error', message: err});
      });
  }

  render() {
    return (
      <form id="registerForm" onSubmit={this.handleFormSubmit}>
        <h2>Register</h2>
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
          func={this.handleChange}
        />
        <label>Repeat Password:</label>
        <Input
          type="password"
          name="confirmedPassword"
          func={this.handleChange}
        />
        <input id="btnRegister" value="Sign Up" type="submit" />
      </form>
    );
  }
}

export default RegisterForm;