import React, { Component } from 'react';

class Button extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     black: true
  //   };
  // }

  changeColor() {
    this.setState({ black: !this.state.black });
  }

  render() {
    // let btn_class = this.state.black ? 'blackButton' : 'whiteButton';
    return (
      <button
        type="button"
        className="btn btn-outline-primary"
        //onClick={this.changeColor.bind(this)}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
