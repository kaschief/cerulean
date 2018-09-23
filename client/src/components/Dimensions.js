import React, { Component } from 'react';
import tinycolor from 'tinycolor2';
import { Container, Row, Col } from 'reactstrap';
import Box from './Box';
import allcolors from '../allcolors.json';

class Dimensions extends Component {
  render() {
    let color = tinycolor(this.props.hex);
    let rgb = color.toRgb();
    // let name = allcolors.find(maincolor => {
    //   return maincolor.hex === this.props.hex;
    // }).name;

    //console.log('FOUND THE NAME------>', name);

    console.log('rgb: ', rgb);
    // console.log('name: ', name);
    //console.log('INSIDE TINY COLOR------>', color.toName());

    let analagous = tinycolor(this.props.hex)
      .analogous()
      .map(function(t) {
        return t.toHexString();
      });

    console.log('ANALAGOUS---->', analagous);

    let triad = tinycolor(this.props.hex)
      .triad()
      .map(function(t) {
        return t.toHexString();
      });

    console.log('TRIAD---->', triad);

    let tetrad = tinycolor(this.props.hex)
      .tetrad()
      .map(function(t) {
        return t.toHexString();
      });

    console.log('TETRAD---->', tetrad);

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
          {analagous.map(c => {
            console.log('C INSIDE OF ANALAGOUS---->', c);
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
        </Row>
        <div>
          <hr />
        </div>
        <Row>
          {tetrad.map(c => {
            console.log('C INSIDE OF TETRAD---->', c);
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
        </Row>
        <div>
          <hr />
        </div>
        <Row>
          {splitcomplement.map(c => {
            console.log('C INSIDE OF SPLIT---->', c);
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
        </Row>
        <div>
          <hr />
        </div>
        <Row>
          {monochromatic.map(c => {
            console.log('C INSIDE OF MONOCHROMATIC---->', c);
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
        </Row>
      </Container>
    );
  }
}

export default Dimensions;
