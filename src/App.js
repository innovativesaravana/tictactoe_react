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
      turn: 'x',
      winner: null
    }
  }

  resetBoard(){
    this.setState({
      gameBoard: [
        ' ',' ',' ',
        ' ',' ',' ',
        ' ',' ',' '
      ],
      turn: 'x',
      winner: null
    })

  }

  updateBoard(loc,player) {
    if(this.state.gameBoard[loc] === 'x' || this.state.gameBoard[loc] == 'o' || this.state.winner) {
      // invalid move
      return;
    }

    let currentGameBoard = this.state.gameBoard;
    currentGameBoard.splice(loc,1,this.state.turn);
    this.setState({gameBoard: currentGameBoard});

    let topRow = this.state.gameBoard[0] + this.state.gameBoard[1] + this.state.gameBoard[2]
    if (topRow.match(/xxx|ooo/)) {
      this.setState({winner: "winner is: " + player});
      return;
    }

    let middleRow = this.state.gameBoard[3] + this.state.gameBoard[4] + this.state.gameBoard[5]
    if (middleRow.match(/xxx|ooo/)) {
      this.setState({winner: "winner is: " + player});
      return;
    }

    let bottomRow = this.state.gameBoard[6] + this.state.gameBoard[7] + this.state.gameBoard[8]
    if (bottomRow.match(/xxx|ooo/)) {
      this.setState({winner: "winner is: " + player});
      return;
    }

    let firstColumn = this.state.gameBoard[0] + this.state.gameBoard[3] + this.state.gameBoard[6]
    if (firstColumn.match(/xxx|ooo/)) {
      this.setState({winner: "winner is: " + player});
      return;
    }

    let secondColumn = this.state.gameBoard[1] + this.state.gameBoard[4] + this.state.gameBoard[7]
    if (secondColumn.match(/xxx|ooo/)) {
      this.setState({winner: "winner is: " + player});
      return;
    }

    let thirdColumn = this.state.gameBoard[2] + this.state.gameBoard[5] + this.state.gameBoard[8]
    if (thirdColumn.match(/xxx|ooo/)) {
      this.setState({winner: "winner is: " + player});
      return;
    }

    let rightDiagonal = this.state.gameBoard[0] + this.state.gameBoard[4] + this.state.gameBoard[8]
    if (rightDiagonal.match(/xxx|ooo/)) {
      this.setState({winner: "winner is: " + player});
      return;
    }

    let leftDiagonal = this.state.gameBoard[2] + this.state.gameBoard[4] + this.state.gameBoard[6]
    if (leftDiagonal.match(/xxx|ooo/)) {
      this.setState({winner: "winner is: " + player});
      return;
    }

    let moves = this.state.gameBoard.join('').replace(/ /g,'');
    if (moves.length === 9) {
      this.setState({winner: 'draw'});
      return;
    }

    this.setState({turn: (this.state.turn === 'x') ? 'o' : 'x'});

  }
  render() {
    return (
      <div className="container">
        <div className="menu">
          <h1>TicTacToe</h1>
          <Announsement winner={this.state.winner}/>
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
