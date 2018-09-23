import React, { Component } from 'react';

import {
  Card,
  Table,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import tinycolor from 'tinycolor2';

export default class Info extends Component {
  render() {
    let color = tinycolor(this.props.hex);
    let dark = color.isDark();

    return (
      <div>
        <Card>
          <CardBody>
            {/* <CardTitle>More about {this.props.name}</CardTitle> */}
            {this.props.meaning.length > 0 && (
              <CardSubtitle>
                Did you know that {this.props.name} is part of the{' '}
                {this.props.family} family of colors?
              </CardSubtitle>
            )}
            <div>
              <hr />
            </div>

            {this.props.meaning.length > 0 && (
              <CardText>{this.props.meaning}</CardText>
            )}
            <div>
              <div>
                <hr />
              </div>{' '}
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
            <Button>Save</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
