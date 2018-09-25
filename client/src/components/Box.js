import React, { Component } from 'react';
import Card from './Card';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
  }

  cardIsIn = () => {
    this.setState({
      display: true
    });
  };

  cardIsOut = () => {
    this.setState({
      display: false
    });
  };

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
      border: `1px solid ${this.props.hex}`,
      borderRadius: '50%',
      backgroundColor: `${this.props.hex}`,
      boxShadow: '0.5px 0.5px 2px #888888',
      opacity: '1',
      fontSize: 10,
      fontWeight: 'bold',
      padding: '5%',
      margin: '5%'
    };
    return (
      <div
        className="Box text-center"
        onMouseEnter={e => {
          this.cardIsIn();
        }}
        onMouseLeave={e => {
          this.cardIsOut();
        }}
        onMouseOver={e =>
          this.props.onHover(this.props.name, this.props.hex, this.props.rgb)
        }
      >
        <div className="zoom" style={boxStyle}>
          <div className="innerText">
            {this.state.display && (
              <Card
                name={this.props.name}
                hex={this.props.hex}
                rgb={this.props.rgb}
                //dark={this.props.dark}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
