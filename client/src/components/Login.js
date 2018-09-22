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
      <div className="limiter">
        <div
          class="container-login100"
          style={{ backgroundImage: `{url('images/bg-01.jpg') }` }}
          //style={{ color: `${this.props.hex}` }}
        >
          <div class="wrap-login100">
            <form class="login100-form validate-form">
              <span class="login100-form-logo">
                <i class="zmdi zmdi-landscape" />
              </span>

              <span class="login100-form-title p-b-34 p-t-27">Log in</span>

              <div
                class="wrap-input100 validate-input"
                data-validate="Enter username"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
                <span class="focus-input100" data-placeholder="" />
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Enter password"
              >
                <input
                  class="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                />
                <span class="focus-input100" data-placeholder="" />
              </div>

              <div class="contact100-form-checkbox">
                <input
                  class="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label class="label-checkbox100" for="ckb1">
                  Remember me
                </label>
              </div>

              <div class="container-login100-form-btn">
                <button class="login100-form-btn">Login</button>
              </div>

              <div class="text-center p-t-90">
                <a class="txt1" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div className="Login text-center">
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
      </div> */
}
