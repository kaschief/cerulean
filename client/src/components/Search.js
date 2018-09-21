import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

export default class Search extends Component {
  render() {
    return (
      <div className="Search">
        {/* <input
          className="input search-bar"
          type="text"
          name="search"
          placeholder="Search"
          value={this.props.search}
          onChange={this.props.onChange}
        /> */}
        <Form inline>
          <FormGroup>
            {/* className="mb-2 mr-sm-2 mb-sm-0" */}
            <Input
              type="text"
              name="search"
              //id="examplesearch"
              placeholder="What is your color?"
              value={this.props.search}
              onChange={this.props.change}
            />
          </FormGroup>
          <Button onSubmit={this.props.submit}>Submit</Button>
        </Form>
      </div>
    );
  }
}
