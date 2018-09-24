import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Home text-center">
        <Container>
          <Row className="home-frame">
            <Col lg="12">
              <Link to={'/colors'}>
                <h1>Cerulean</h1>
              </Link>
              <p className="lead">
                Discover Your <span className="color-title">Colors</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
