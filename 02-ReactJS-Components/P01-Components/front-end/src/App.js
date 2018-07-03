import React, { Component } from 'react';
import Slider from './components/Slider';
import FetchCharacters from './components/FetchCharacters';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slider />
        <FetchCharacters />
      </div>
    );
  }
}

export default App;