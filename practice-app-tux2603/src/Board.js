import React, { Component } from 'react';
import Square from './Square.js';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {piece: this.props.piece};
    global.activeSquare = null;
    global.lastActiveSquare = null;
    global.squares = [];
  }

  squareClicked(e) {
    console.log(global)
    e.preventDefault();

    if(!this.state.isActive) {
      if(global.activeSquare === null) {
        this.setState({isActive: true});
        global.activeSquare = this;
        if(global.lastActiveSquare !== this) global.squares.forEach((i) => i.timesClicked = 0);
      }

      else {
        this.setState({piece: global.activeSquare.state.piece});
        global.activeSquare.setState({piece: "", isActive: false});
        global.activeSquare = null;
      }
    }

    else {
      if(this === global.activeSquare) {
        this.setState({isActive: false});
        global.lastActiveSquare = global.activeSquare;
        global.activeSquare = null;
        this.timesClicked ++;
      }
    }

    if(this.timesClicked >= 5) {
      var rand = Math.random();
      if(rand < 0.33) this.setState({piece: "☺"});
      else if(rand < 0.66) this.setState({piece: "☻"});
      else {
        if(this.state.piece !== "") this.setState({piece: "☠"})
        else if(rand < 0.9) this.setState({piece: "☣"});
        else this.setState({piece: "☢"});
      }
    }
  }

  render() {
    return (<table className="App-board"><tbody>

      <tr>
        <Square piece="♜" squareColor="light" id='a8' clickHandler={this.squareClicked}/><Square piece="♞" squareColor="dark" id='b8' clickHandler={this.squareClicked}/><Square squareColor="light" piece="♝" id='c8' clickHandler={this.squareClicked}/><Square squareColor="dark"  piece="♛" id='d8' clickHandler={this.squareClicked}/>
        <Square squareColor="light"  piece="♚" id='e8' clickHandler={this.squareClicked}/><Square squareColor="dark"  piece="♝" id='f8' clickHandler={this.squareClicked}/><Square squareColor="light"  piece="♞" id='g8' clickHandler={this.squareClicked}/><Square squareColor="dark"   piece="♜" id='h8' clickHandler={this.squareClicked}/>
      </tr>

      <tr>
        <Square squareColor="dark" piece="♟" id='a7' clickHandler={this.squareClicked}/><Square squareColor="light" piece="♟" id='b7' clickHandler={this.squareClicked}/><Square squareColor="dark" piece="♟" id='c7' clickHandler={this.squareClicked}/><Square squareColor="light" piece="♟" id='d7' clickHandler={this.squareClicked}/>
        <Square squareColor="dark" piece="♟" id='e7' clickHandler={this.squareClicked}/><Square squareColor="light" piece="♟" id='f7' clickHandler={this.squareClicked}/><Square squareColor="dark" piece="♟" id='g7' clickHandler={this.squareClicked}/><Square squareColor="light" piece="♟" id='h7' clickHandler={this.squareClicked}/>
      </tr>

      <tr>
        <Square squareColor="light" id='a6' clickHandler={this.squareClicked}/><Square squareColor="dark" id='b6' clickHandler={this.squareClicked}/><Square squareColor="light" id='c6' clickHandler={this.squareClicked}/><Square squareColor="dark"  id='d6' clickHandler={this.squareClicked}/>
        <Square squareColor="light" id='e6' clickHandler={this.squareClicked}/><Square squareColor="dark" id='f6' clickHandler={this.squareClicked}/><Square squareColor="light" id='g6' clickHandler={this.squareClicked}/><Square squareColor="dark"  id='h6' clickHandler={this.squareClicked}/>
      </tr>

      <tr>
        <Square squareColor="dark" id='a5' clickHandler={this.squareClicked}/><Square squareColor="light" id='b5' clickHandler={this.squareClicked}/><Square squareColor="dark" id='c5' clickHandler={this.squareClicked}/><Square squareColor="light"  id='d5' clickHandler={this.squareClicked}/>
        <Square squareColor="dark" id='e5' clickHandler={this.squareClicked}/><Square squareColor="light" id='f5' clickHandler={this.squareClicked}/><Square squareColor="dark" id='g5' clickHandler={this.squareClicked}/><Square squareColor="light"  id='h5' clickHandler={this.squareClicked}/>
      </tr>

      <tr>
        <Square squareColor="light" id='a4' clickHandler={this.squareClicked}/><Square squareColor="dark" id='b4' clickHandler={this.squareClicked}/><Square squareColor="light" id='c4' clickHandler={this.squareClicked}/><Square squareColor="dark"  id='d4' clickHandler={this.squareClicked}/>
        <Square squareColor="light" id='e4' clickHandler={this.squareClicked}/><Square squareColor="dark" id='f4' clickHandler={this.squareClicked}/><Square squareColor="light" id='g4' clickHandler={this.squareClicked}/><Square squareColor="dark"  id='h4' clickHandler={this.squareClicked}/>
      </tr>

      <tr>
        <Square squareColor="dark" id='a3' clickHandler={this.squareClicked}/><Square squareColor="light" id='b3' clickHandler={this.squareClicked}/><Square squareColor="dark" id='c3' clickHandler={this.squareClicked}/><Square squareColor="light"  id='d3' clickHandler={this.squareClicked}/>
        <Square squareColor="dark" id='e3' clickHandler={this.squareClicked}/><Square squareColor="light" id='f3' clickHandler={this.squareClicked}/><Square squareColor="dark" id='g3' clickHandler={this.squareClicked}/><Square squareColor="light"  id='h3' clickHandler={this.squareClicked}/>
      </tr>

      <tr>
        <Square squareColor="light" piece="♙" id='a2' clickHandler={this.squareClicked}/><Square squareColor="dark" piece="♙" id='b2' clickHandler={this.squareClicked}/><Square squareColor="light" piece="♙" id='c2' clickHandler={this.squareClicked}/><Square squareColor="dark" piece="♙" id='d2' clickHandler={this.squareClicked}/>
        <Square squareColor="light" piece="♙" id='e2' clickHandler={this.squareClicked}/><Square squareColor="dark" piece="♙" id='f2' clickHandler={this.squareClicked}/><Square squareColor="light" piece="♙" id='g2' clickHandler={this.squareClicked}/><Square squareColor="dark" piece="♙" id='h2' clickHandler={this.squareClicked}/>
      </tr>

      <tr>
        <Square squareColor="dark" piece="♖" id='a1' clickHandler={this.squareClicked}/><Square squareColor="light" piece="♘" id='b1' clickHandler={this.squareClicked}/><Square squareColor="dark" piece="♗" id='c1' clickHandler={this.squareClicked}/><Square squareColor="light" piece="♕" id='d1' clickHandler={this.squareClicked}/>
        <Square squareColor="dark" piece="♔" id='e1' clickHandler={this.squareClicked}/><Square squareColor="light" piece="♗" id='f1' clickHandler={this.squareClicked}/><Square squareColor="dark" piece="♘" id='g1' clickHandler={this.squareClicked}/><Square squareColor="light" piece="♖" id='h1' clickHandler={this.squareClicked}/>
      </tr>

    </tbody></table>);
  }
}

export default Board;
