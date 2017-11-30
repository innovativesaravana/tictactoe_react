import React, { Component } from 'react';
import './Announsement.css';

export default class Announsement extends Component{
  render() {
    return (
      <div className={this.props.winner ? 'visible' : 'hidden'}>
        <h2>{this.props.winner}</h2>
        <h2>Game over</h2>
      </div>
    )
  }
}
