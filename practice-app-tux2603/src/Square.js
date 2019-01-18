import React, { Component } from 'react';


class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {piece: this.props.piece};
  }

  render() {
    return (<td className={this.props.squareColor + ' App-square'}>{this.state.piece}</td>)
  }
}

export default Square;
