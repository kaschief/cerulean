import React, { Component } from 'react';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
import api from '../api';

class Logout extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(props) {
    api.logout().then(console.log('User successfully logged out'));
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
