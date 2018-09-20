import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Colors text-center">
        <h1>Colors Go Here</h1>
      </div>
    );
  }
}
