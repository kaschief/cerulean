import React, { Component } from 'react';

export default class Box extends Component {
  render() {
    const K_WIDTH = 50;
    const K_HEIGHT = 50;

    const boxStyle = {
      width: K_WIDTH,
      height: K_HEIGHT,
      left: -K_WIDTH / 2,
      top: -K_HEIGHT / 2,

      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      border: `1px solid ${this.props.color}`,
      borderRadius: '50%',
      backgroundColor: `${this.props.color}`,
      boxShadow: '0.5px 0.5px 2px #888888',
      opacity: '1',
      fontSize: 10,
      fontWeight: 'bold',
      // filter: 'brightness(95%)',
      padding: '5%',
      margin: '5%'
    };
    return (
      <div
        className="Box text-center"
        onMouseOver={e => this.props.onHover(this.props.color)}
      >
        <div className="zoom" style={boxStyle} />
      </div>
    );
  }
}
