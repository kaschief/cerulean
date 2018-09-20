import React, { Component } from 'react';
import api from '../api';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (field, event) => {
    this.setState({
      [field]: event.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    api
      .login(this.state.username, this.state.password)
      .then(result => {
        console.log('LOGIN SUCCESS!');
        this.props.history.push('/'); // Redirect to the home page
      })
      .catch(err => {
        console.log('LOGIN ERROR');
      });
  };

  render() {
    return (
      <div className="Login text-center">
        <h2>Login</h2>
        <form>
          Username:{' '}
          <input
            type="text"
            value={this.state.username}
            onChange={e => this.handleInputChange('username', e)}
          />{' '}
          <br />
          Password:{' '}
          <input
            type="password"
            value={this.state.password}
            onChange={e => this.handleInputChange('password', e)}
          />{' '}
          <br />
          <button onClick={e => this.handleClick(e)}>Login</button>
        </form>
      </div>
    );
  }
}
