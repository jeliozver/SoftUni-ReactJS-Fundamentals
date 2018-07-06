import React, { Component } from 'react';
import SingUpForm from './components/form/SingUpForm';
import LoginForm from './components/form/LoginForm';
import CreatePokemonForm from './components/form/CreatePokemonForm';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: sessionStorage.getItem('username') || '',
      token: sessionStorage.getItem('token') || ''
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(username, token) {
    this.setState({
      username: username,
      token: token
    });
  }

  render() {
    if (this.state.username === '') {
      return (
        <div className='App'>
          <SingUpForm />
          <LoginForm login={this.updateState} />
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hello, {this.state.username}</h1>
        <CreatePokemonForm />
      </div>
    );
  }
}

export default App;