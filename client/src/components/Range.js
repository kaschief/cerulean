import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class Range extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
    console.log('FIRST RANGE----->', this.state.value, this.props);
  }

  componentDidMount = () => {
    this.setState({
      value: this.props.value
    });

    console.log('NOW IT IS', this.state.value);
  };

  valueChangeHandle = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    console.log('THIRD RANGE------>', this.props.value);
    return (
      <InputRange
        maxValue={255}
        minValue={0}
        value={this.state.value}
        onChange={e => this.valueChangeHandle(e)}
      />
    );
  }
}

export default Range;
