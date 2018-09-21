import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';

export default class Search extends Component {
  render() {
    return (
      <div className="Search">
        <Input
          type="text"
          name="search"
          //id="examplesearch"
          placeholder="What is your color?"
          value={this.props.search}
          onChange={this.props.change}
        />
      </div>
    );
  }
}
