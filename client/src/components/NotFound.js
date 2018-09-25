import React, { Component } from 'react';

class NotFound extends Component {
  componentDidMount() {
    document.body.className = 'server';
  }

  componentWillUnmount() {
    document.body.className = 'body';
  }

  render() {
    return (
      <div className="drunk">
        <h1>404. Oops, sorry!</h1>
        <h1> The server is sort of "busy".</h1>
        <br />
        <br />
        <h1> Stop looking.</h1>
      </div>
    );
  }
}

export default NotFound;
