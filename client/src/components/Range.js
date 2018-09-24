import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class Range extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
    this.state = {
      value: ''
    };
  }

  componentDidMount() {
    this.setState({
      value: this.props.value
    });

    console.log('cdm', this.props);
  }

  valueChangeHandle = event => {
    this.setState({
      value: event
    });
  };

  render() {
    let range;
    if (!this.props) {
      range = <p>nothing here...</p>;
    } else {
      range = (
        <InputRange
          maxValue={255}
          minValue={0}
          value={this.state.value}
          onChange={e => this.valueChangeHandle(e)}
        />
      );
    }
    return <div>{range}</div>;
  }
}

export default Range;
