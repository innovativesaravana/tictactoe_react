import React, { Component } from 'react';
import './Announcement.css';

export default class Announcement extends Component{
  render() {
    return (
      <div className={this.props.winner ? 'visible' : 'hidden'}>
        <h2>{this.props.winner}</h2>
        <h2>Game over</h2>
      </div>
    )
  }
}
