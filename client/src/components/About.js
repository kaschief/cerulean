import React, { Component } from 'react';

export default class About extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: '',
  //     password: '',
  //     error: ''
  //   };
  // }

  componentDidMount() {
    document.body.className = 'pg1';
  }

  componentWillUnmount() {
    document.body.className = 'body';
  }

  render() {
    return (
      <div className="About">
        <div>
          <h1>This is the About Page</h1>
        </div>
        <div>
          <h1>More Info</h1>
        </div>
      </div>
    );
  }
}
