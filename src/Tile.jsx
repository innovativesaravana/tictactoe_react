import React, { Component } from 'react';
import './Tile.css';

export default class Tile extends Component {
  tileClick(props) {
    props.updateBoard(props.loc,props.turn);
  }

  render() {
    return (
      <div className="tile">
        <p2>{this.props.value}</p2>
      </div>
    )
  }
}
