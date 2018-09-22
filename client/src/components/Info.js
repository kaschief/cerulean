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

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('INSIDE INFO---->', this.props);
    return (
      <div>
        <Card>
          {/* <div
            className="title"
            style={{ backgroundColor: `${this.props.hex}` }}
          >
            <h1>{this.state.name}</h1>
          </div> */}

          <CardBody>
            {/* <CardTitle>More about {this.props.name}</CardTitle> */}
            <CardSubtitle>
              Did you know that {this.props.name} is part of the family of
              MEANING?
            </CardSubtitle>
            <CardText>
              Some quick Info text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
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
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
