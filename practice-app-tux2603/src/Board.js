import React, { Component } from 'react';
import Square from './Square.js';


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {piece: this.props.piece};
  }

  render() {
    return (<table className="App-board">

      <tr>
        <Square squareColor="light" id='a8' /><Square squareColor="dark" id='b8' /><Square squareColor="light" id='c8' /><Square squareColor="dark"  id='d8' />
        <Square squareColor="light" id='e8' /><Square squareColor="dark" id='f8' /><Square squareColor="light" id='g8' /><Square squareColor="dark"  id='h8' />
      </tr>

      <tr>
        <Square squareColor="dark" id='a7' /><Square squareColor="light" id='b7' /><Square squareColor="dark" id='c7' /><Square squareColor="light"  id='d7' />
        <Square squareColor="dark" id='e7' /><Square squareColor="light" id='f7' /><Square squareColor="dark" id='g7' /><Square squareColor="light"  id='h7' />
      </tr>

      <tr>
        <Square squareColor="light" id='a6' /><Square squareColor="dark" id='b6' /><Square squareColor="light" id='c6' /><Square squareColor="dark"  id='d6' />
        <Square squareColor="light" id='e6' /><Square squareColor="dark" id='f6' /><Square squareColor="light" id='g6' /><Square squareColor="dark"  id='h6' />
      </tr>

      <tr>
        <Square squareColor="dark" id='a5' /><Square squareColor="light" id='b5' /><Square squareColor="dark" id='c5' /><Square squareColor="light"  id='d5' />
        <Square squareColor="dark" id='e5' /><Square squareColor="light" id='f5' /><Square squareColor="dark" id='g5' /><Square squareColor="light"  id='h5' />
      </tr>

      <tr>
        <Square squareColor="light" id='a4' /><Square squareColor="dark" id='b4' /><Square squareColor="light" id='c4' /><Square squareColor="dark"  id='d4' />
        <Square squareColor="light" id='e4' /><Square squareColor="dark" id='f4' /><Square squareColor="light" id='g4' /><Square squareColor="dark"  id='h4' />
      </tr>

      <tr>
        <Square squareColor="dark" id='a3' /><Square squareColor="light" id='b3' /><Square squareColor="dark" id='c3' /><Square squareColor="light"  id='d3' />
        <Square squareColor="dark" id='e3' /><Square squareColor="light" id='f3' /><Square squareColor="dark" id='g3' /><Square squareColor="light"  id='h3' />
      </tr>

      <tr>
        <Square squareColor="light" id='a2' /><Square squareColor="dark" id='b2' /><Square squareColor="light" id='c2' /><Square squareColor="dark"  id='d2' />
        <Square squareColor="light" id='e2' /><Square squareColor="dark" id='f2' /><Square squareColor="light" id='g2' /><Square squareColor="dark"  id='h2' />
      </tr>

      <tr>
        <Square squareColor="dark" id='a1' /><Square squareColor="light" id='b1' /><Square squareColor="dark" id='c1' /><Square squareColor="light"  id='d1' />
        <Square squareColor="dark" id='e1' /><Square squareColor="light" id='f1' /><Square squareColor="dark" id='g1' /><Square squareColor="light"  id='h1' />
      </tr>

    </table>);
  }
}

export default Board;
