import React, { Component } from 'react';
import api from '../api';

class Logout extends Component {
  componentDidMount() {
    api.logout();
  }
  render() {
    return (
      <div className="Logout">
        <h2>You've been logged out!</h2>
      </div>
    );
  }
}

export default Logout;
