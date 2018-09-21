import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Home text-center">
        <h1>Cerulean</h1>
        <p className="lead">Discover Your Color</p>
        <Button tag={Link} color="primary" outline to={'/colors'}>
          CMYK
        </Button>{' '}
      </div>
    );
  }
}
