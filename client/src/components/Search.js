import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div className="Search">
        <input
          className="input search-bar"
          type="text"
          name="search"
          placeholder="Search"
          value={this.props.search}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
