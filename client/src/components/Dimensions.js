import React, { Component } from 'react';
import tinycolor from 'tinycolor2';
import { Container, Row, Col } from 'reactstrap';
import Box from './Box';
import allcolors from '../allcolors.json';
import axios from 'axios';

class Dimensions extends Component {
  componentDidMount() {
    axios.get('http://thecolorapi.com//id?hex=24B1E0').then(response => {
      console.log('INSIDE COLOR API---->', response);
    });
  }

  render() {
    let color = tinycolor(this.props.hex);
    let rgb = color.toRgb();
    // let name = allcolors.find(maincolor => {
    //   return maincolor.hex === this.props.hex;
    // }).name;

    //console.log('FOUND THE NAME------>', name);

    let analagous = tinycolor(this.props.hex)
      .analogous()
      .map(function(t) {
        return t.toHexString();
      });

    console.log('ANALAGOUS---->', analagous);

    let tetrad = tinycolor(this.props.hex)
      .tetrad()
      .map(function(t) {
        return t.toHexString();
      });

    //console.log('TETRAD---->', tetrad);

    let splitcomplement = tinycolor(this.props.hex)
      .splitcomplement()
      .map(function(t) {
        return t.toHexString();
      });

    let monochromatic = tinycolor(this.props.hex)
      .monochromatic()
      .map(function(t) {
        return t.toHexString();
      });

    return (
      <Container className="title dimensions-box">
        <Row>
          <Col sm="3" className="dimensions-text">
            Analagous
          </Col>

          <Col sm="9">
            {analagous.map(c => {
              //console.log('C INSIDE OF ANALAGOUS---->', c);
              {
                /* let name = allcolors.filter(color => {
                return color.hex === c;
              }).name; */
              }

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
            {tetrad.map(c => {
              //console.log('C INSIDE OF ANALAGOUS---->', c);
              {
                /* let name = allcolors.filter(color => {
                return color.hex === c;
              }).name; */
              }

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
            Split Compliments
          </Col>
          <Col sm="9">
            {splitcomplement.map(c => {
              //console.log('C INSIDE OF ANALAGOUS---->', c);
              {
                /* let name = allcolors.filter(color => {
                return color.hex === c;
              }).name; */
              }

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
            {monochromatic.map(c => {
              //console.log('C INSIDE OF ANALAGOUS---->', c);
              {
                /* let name = allcolors.filter(color => {
                return color.hex === c;
              }).name; */
              }

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
