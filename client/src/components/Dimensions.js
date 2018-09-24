import React, { Component } from 'react';
import tinycolor from 'tinycolor2';
import { Container, Row, Col } from 'reactstrap';
import Box from './Box';
import allcolors from '../allcolors.json';
import axios from 'axios';

class Dimensions extends Component {
  render() {
    return (
      <Container className="title dimensions-box">
        <Row>
          <Col sm="3" className="dimensions-text">
            Analagous
          </Col>
          <Col sm="9">
            {this.props.analagous.map(c => {
              let color = tinycolor(c);
              let rgb = color.toRgb();
              return (
                <Box
                  key={c}
                  //name={name}
                  hex={c}
                  rgb={rgb}
                  onHover={this.props.onHover}
                />
              );
            })}
          </Col>
        </Row>
        <div>
          <hr />
        </div>
        <Row>
          <Col sm="3" className="dimensions-text">
            Tetrad
          </Col>
          <Col sm="9">
            {this.props.tetrad.map(c => {
              let color = tinycolor(c);
              let rgb = color.toRgb();
              return (
                <Box
                  key={c}
                  //name={name}
                  hex={c}
                  rgb={rgb}
                  onHover={this.props.onHover}
                />
              );
            })}
          </Col>
        </Row>
        <div>
          <hr />
        </div>
        <Row>
          <Col sm="3" className="dimensions-text">
            Split Complements
          </Col>
          <Col sm="9">
            {this.props.splitcomplement.map(c => {
              let color = tinycolor(c);
              let rgb = color.toRgb();

              return (
                <Box
                  key={c}
                  //name={name}
                  hex={c}
                  rgb={rgb}
                  onHover={this.props.onHover}
                />
              );
            })}
          </Col>
        </Row>
        <div>
          <hr />
        </div>
        <Row>
          <Col sm="3" className="dimensions-text">
            Monochromatic
          </Col>
          <Col sm="9">
            {this.props.monochromatic.map(c => {
              let color = tinycolor(c);
              let rgb = color.toRgb();

              return (
                <Box
                  key={c}
                  //name={name}
                  hex={c}
                  rgb={rgb}
                  onHover={this.props.onHover}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dimensions;

{
  /* let name = allcolors.filter(color => {
  return color.hex === c;
}).name; */
}
