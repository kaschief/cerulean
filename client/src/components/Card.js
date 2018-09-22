import React, { Component } from 'react';
import Search from './Search';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let r = this.props.rgb ? ` ${this.props.rgb.r},` : '';
    let g = this.props.rgb ? ` ${this.props.rgb.g},` : '';
    let b = this.props.rgb ? ` ${this.props.rgb.b}` : '';
    return (
      <div className="info">
        {this.props.rgb && (
          <div>
            <p>{this.props.name}</p>
            <p>
              Hex:
              {` ${this.props.hex}`}{' '}
            </p>
            <p>RGB: {`${r} ${g} ${b}`} </p>
          </div>
        )}
      </div>
    );
  }
}

export default Card;

// <div className="card">
//     <div className="card-body">
//       <h5
//         className="card-title"
//         style={{ color: `${this.props.hex}` }}
//       >
//         {this.props.name}
//       </h5>
//       <p className="card-text-hex">
//         Hex:
//         {` ${this.props.hex}`}{' '}
//       </p>
//       <p className="card-text-rgb">RGB: {`${r} ${g} ${b}`} </p>
//     </div>
//   </div>
