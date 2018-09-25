import React, { Component } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import api from '../api';

import {
  Card,
  Table,
  CardText,
  CardBody,
  CardSubtitle
  //Button
} from 'reactstrap';
import tinycolor from 'tinycolor2';

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let newColor = {
      hex: this.props.hex,
      name: this.props.name,
      rgb: this.props.rgb,
      meaning: this.props.meaning,
      family: this.props.family,
      analagous: this.props.analagous,
      tetrad: this.props.tetrad,
      splitcomplement: this.props.splitcomplement,
      monochromatic: this.props.monochromatic
    };
    api.addColor(newColor).then(data => {
      console.log('adding the new color', data);
    });
  }

  render() {
    let color = tinycolor(this.props.hex);
    let dark = color.isDark();
    return (
      <div>
        <Card style={{ backgroundColor: '#F7F7F7', color: 'black' }}>
          <CardBody>
            {this.props.meaning.length > 0 && (
              <div>
                <CardSubtitle>
                  Did you know that {this.props.name} is part of the broader
                  family of {this.props.family} colors?
                </CardSubtitle>
                <div>
                  <hr />
                </div>
                <CardText className="meaning-text">
                  {this.props.meaning}
                </CardText>
                <div>
                  <hr />
                </div>{' '}
              </div>
            )}

            <div>
              This is a {dark ? 'DARK ' : 'LIGHT '}
              color.
            </div>
            <div>
              <hr />
            </div>
            <Table borderless>
              <tbody>
                <tr>
                  <th scope="row">HEX</th>
                  <td>{this.props.hex}</td>
                </tr>
                <tr>
                  <th scope="row">RGB</th>
                  <td>{`${this.props.rgb.r}, ${this.props.rgb.g}, ${
                    this.props.rgb.b
                  }`}</td>
                </tr>
              </tbody>
            </Table>

            {api.isLoggedIn() && (
              <Button
                className="save"
                text={'Save'}
                onClick={this.handleSubmit}
              />
            )}

            {!api.isLoggedIn() && (
              <Link to="/login">
                {' '}
                <Button
                  className="save"
                  text={'Login to Save'}
                  //onClick={this.handleSubmit}
                />
              </Link>
            )}
          </CardBody>
        </Card>
      </div>
    );
  }
}
