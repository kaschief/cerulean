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
      <div className="row">
        <div className="col-sm-6">
          <div className="searchBar">
            <Search
              search={this.props.searchTerm}
              change={e => this.props.change(e)}
            />
          </div>
        </div>
        {this.props.rgb && (
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ color: `${this.props.hex}` }}
                >
                  {this.props.name}
                </h5>
                <p className="card-text-hex">
                  Hex:
                  {` ${this.props.hex}`}{' '}
                </p>
                <p className="card-text-rgb">RGB: {`${r} ${g} ${b}`} </p>
                {/* <a href="#" class="btn btn-primary">
                Explore {this.props.name}
              </a> */}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Card;
