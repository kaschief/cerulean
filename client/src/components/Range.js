import React, { Component } from 'react';
import { SketchPicker } from 'react-color';

export default class Range extends Component {
  state = {
    background: this.props.hex
  };

  handleChangeComplete = color => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <SketchPicker
        color={this.state.background}
        onChangeComplete={this.handleChangeComplete}
      />
    );
  }
}
