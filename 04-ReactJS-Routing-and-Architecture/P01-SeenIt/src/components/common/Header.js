import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import observerService from '../../utilities/observerService';
import AuthService from '../../utilities/authService';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };

    this.logout = this.logout.bind(this);
    observerService.subscribe(observerService.events.loginUser, this.userLoggedIn.bind(this));
  }

  userLoggedIn(username) {
    this.setState({
      username: username
    });
  }

  logout() {
    AuthService.logout();
    AuthService.clearSession();
    this.setState({
      username: null
    });
  }
  
  componentDidMount() {
    observerService.trigger(observerService.events.loginUser, AuthService.getUsername());
  }

  render() {
    const loggedInSection =
      <div id="profile">
        <span>{this.state.username}</span>|<Link to="/logout" onClick={this.logout}>logout</Link>
      </div>;
    return (
      <header>
        <span className="logo">☃</span><span className="header">SeenIt</span>
        {this.state.username ? loggedInSection : null}
      </header>
    );
  }
}

export default Header;