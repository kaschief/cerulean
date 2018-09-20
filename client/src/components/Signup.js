import React, { Component } from 'react';
import api from '../api';

export default class Signup extends Component {
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
    let data = {
      username: this.state.username,
      password: this.state.password
    };

    api
      .signup(data)
      .then(result => {
        console.log('SIGNUP SUCCESS!');
        this.props.history.push('/login'); // Redirect to the login page
      })
      .catch(err => {
        console.log('SIGNUP ERROR');
      });
  };

  render() {
    return (
      <div className="Signup text-center">
        <h2>Signup</h2>
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
          <button onClick={e => this.handleClick(e)}>Signup</button>
        </form>
      </div>
    );
  }
}
