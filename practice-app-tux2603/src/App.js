import React, { Component } from 'react';
import ColorLogo from './ColorLogo.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ColorLogo />

          <p />

          <p>Click on the logo to change its color</p>
          <p className="yellow-and-snow-not-good">☃</p>
        </header>
      </div>
    );
  }
}

export default App;
