import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Search from './Search';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Home text-center">
        <h1>Cerulean</h1>
        <Search />
        <p className="lead">Discover Your Color</p>
        <Button tag={Link} color="primary" outline to={'/discover'}>
          Search
        </Button>{' '}
      </div>
    );
  }
}
