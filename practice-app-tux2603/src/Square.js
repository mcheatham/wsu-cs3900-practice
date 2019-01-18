import React, { Component } from 'react';


class Square extends Component {
  constructor(props) {
    super(props);
    this.timesClicked = 0;
    this.state = {
      piece: this.props.piece? this.props.piece:"",
      isActive: false
    };

    this.clickHandler = this.props.clickHandler.bind(this)
    global.squares.push(this);
  }

  render() {
    return (<td className={this.props.squareColor + (this.state.isActive?' active':'') + ' App-square'} onClick={this.clickHandler}>{this.state.piece}</td>)
  }
}

export default Square;
