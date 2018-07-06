import React, { Component } from 'react';
import Input from './formFields/Input';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }

  submitLogin(e) {
    e.preventDefault();
    let payload = {
      email: this.state.email,
      password: this.state.password
    };

    this.login(payload);
  }

  login(payload) {
    fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => {
        return res.json();
      })
      .then(d => {
        if (d.success && d.token) {
          sessionStorage.setItem('token', d.token);
          sessionStorage.setItem('username', d.user.name);
          this.props.login(d.user.name, d.token);
        }
      });
  }

  render() {
    let validObj = {
      validMail: this.state.email !== '',
      validPassword: this.state.password !==''
    };

    return (
      <form onSubmit={this.submitLogin.bind(this)}>
        <fieldset className='App'>
          <div style={{ display: 'inline-grid' }}>
            <h2>Login</h2>
            <Input
              type='text'
              data='email'
              name='Email'
              func={e => {
                this.setState({ email: e.target.value });
              }}
              valid={validObj.validMail}
            />

            <Input
              type='password'
              data='password'
              name='Password'
              func={e => {
                this.setState({ password: e.target.value });
              }}
              valid={validObj.validPassword}
            />

            <input
              style={({ 'display': (validObj.validMail && validObj.validPassword) === true ? '' : 'none' })}
              type='submit'
              value='Login'
            />
          </div>
        </fieldset>
      </form>
    );
  }
}

export default LoginForm;