import React, { Component } from 'react';

import './resources/style/App.css';
import Header from './components/common/Header';
import Notification from './components/Notification';
import MyRouter from './components/MyRouter';
import Footer from './components/common/Footer';

class App extends Component {
  render() {
    return (
      <div id="container">
        <Header />
        <Notification />
        <MyRouter />
        <Footer />
      </div>
    );
  }
}

export default App;