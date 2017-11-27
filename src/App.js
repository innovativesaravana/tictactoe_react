import React, { Component } from 'react';
import './App.css';
import Announsement from './Announsement';
import ResetButton from './ResetButton';
import Tile from './Tile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [
        ' ',' ',' ',
        ' ',' ',' ',
        ' ',' ',' '
      ],
      turn: 'X'
    }
  }

  resetBoard(){
    this.setState({
      gameBoard: [
        ' ',' ',' ',
        ' ',' ',' ',
        ' ',' ',' '
      ],
      turn: 'X'
    })

  }

  updateBoard(loc,player) {

  }
  render() {
    return (
      <div className="container">
        <div className="menu">
          <h1>TicTacToe</h1>
          <Announsement />
          <ResetButton reset={this.resetBoard.bind(this)} />
        </div>
      {this.state.gameBoard.map(function(value,i){
        return (
          <Tile
            key={i}
            loc={i}
            value={value}
            updateBoard={this.updateBoard.bind(this)}
            turn={this.state.turn} />
        )
      }.bind(this))}
      </div>

    );
  }
}

export default App;
