import React, { Component } from 'react';
import ColorLogo from './ColorLogo.js';
import Board from './Board.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Board />

          <p />

          <ColorLogo />

          <p className="yellow-and-snow-not-good">☃</p>

        </header>
      </div>
    );
  }
}

export default App;
