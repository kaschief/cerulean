import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button type="button" className="btn btn-outline-primary">
        {this.props.text}
      </button>
    );
  }
}

export default Button;
