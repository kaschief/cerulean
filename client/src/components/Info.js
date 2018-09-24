import React, { Component } from 'react';
import Button from './Button';

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
            {/* <CardTitle>More about {this.props.name}</CardTitle> */}
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
                  <td>{`${this.props.r}, ${this.props.g}, ${this.props.b}`}</td>
                </tr>
              </tbody>
            </Table>

            <Button className="save" text={'Save'} />
          </CardBody>
        </Card>
      </div>
    );
  }
}
