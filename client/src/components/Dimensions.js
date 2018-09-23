import React, { Component } from 'react';
import tinycolor from 'tinycolor2';
import { Container, Row, Col } from 'reactstrap';

class Dimensions extends Component {
  render() {
    let color = tinycolor(this.props.hex);
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

    let dark = color.isDark();

    return (
      <Container>
        <div>
          <div className="title">
            This is a {dark ? 'DARK ' : 'LIGHT '}
            color.
          </div>
          <div className="title">
            <Row>
              <Col>.col</Col>
              <Col>.col</Col>
              <Col>.col</Col>
              <Col>.col</Col>
              <Col>.col</Col>
              <Col>.col</Col>
            </Row>
          </div>
          {/* {analagous.map(c => {
          return (
            <div className="title" style={{ backgroundColor: `${c}` }}>
              <p>The HEX is {c}</p>
            </div>
          );
        })} */}
          {/* {triad.map(c => {
          return (
            <div className="title" style={{ backgroundColor: `${c}` }}>
              <p>The HEX is {c}</p>
            </div>
          );
        })} */}
          {/* {tetrad.map(c => {
          return (
            <div className="title" style={{ backgroundColor: `${c}` }}>
              <p>The HEX is {c}</p>
            </div>
          );
        })} */}

          {/* {splitcomplement.map(c => {
          return (
            <div className="title" style={{ backgroundColor: `${c}` }}>
              <p>The HEX is {c}</p>
            </div>
          );
        })} */}

          {monochromatic.map(c => {
            return (
              <div className="title" style={{ backgroundColor: `${c}` }}>
                <p>The HEX is {c}</p>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default Dimensions;
