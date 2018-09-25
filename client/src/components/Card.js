import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let r = this.props.rgb ? ` ${this.props.rgb.r},` : '';
    let g = this.props.rgb ? ` ${this.props.rgb.g},` : '';
    let b = this.props.rgb ? ` ${this.props.rgb.b}` : '';
    let subHex = this.props.hex.substring(1, 7);
    // let toneClass;
    // this.props.dark ? (toneClass = 'highlight') : (toneClass = 'highdark');
    return (
      <div className="info">
        {this.props.rgb && (
          <Link to={'/colors/' + subHex}>
            <div>
              <p className="highlight">{this.props.name}</p>
              <p className="highlight">
                Hex:
                {` ${this.props.hex}`}{' '}
              </p>
              <p className="highlight">RGB: {`${r} ${g} ${b}`} </p>
            </div>
          </Link>
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
