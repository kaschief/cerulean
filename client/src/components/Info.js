import React, { Component } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import {
  Card,
  Table,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
  //Button
} from 'reactstrap';
import tinycolor from 'tinycolor2';

export default class Info extends Component {
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

            <Link to={'/favorites/:id'}>
              <Button className="save" text={'Save'} Link />
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  }
}
