import React, { Component } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

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
        this.props.history.push('/favorites'); // Redirect to the home page
      })
      .catch(err => {
        console.log('LOGIN ERROR');
      });
  };

  render() {
    return (
      <div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form className="login100-form validate-form">
                <span className="login100-form-title p-b-34">Log In</span>

                <div
                  className="wrap-input100 rs1-wrap-input100 validate-input m-b-20"
                  data-validate="Type user name"
                >
                  <input
                    id="first-name"
                    className="input100"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.usename}
                    onChange={e => this.handleInputChange('username', e)}
                  />
                  <span className="focus-input100" />
                </div>
                <div
                  className="wrap-input100 rs2-wrap-input100 validate-input m-b-20"
                  data-validate="Type password"
                >
                  <input
                    className="input100"
                    type="password"
                    name="pass"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={e => this.handleInputChange('password', e)}
                  />
                  <span className="focus-input100" />
                </div>

                <div className="container-login100-form-btn">
                  <button
                    className="login100-form-btn"
                    onClick={e => this.handleClick(e)}
                  >
                    Log In
                  </button>
                </div>
                <div className="w-full text-center">
                  <span>
                    <p className="newuser">
                      New user?{' '}
                      <Link to="/signup" className="txt3">
                        Sign up here.
                      </Link>
                    </p>
                  </span>
                </div>
              </form>

              <div
                class="login100-more"
                //style={{backgroundImage: "url('images/bg-01.jpg'"}"}
              />
            </div>
          </div>
        </div>
      </div>
    );

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
  }
}

{
  /* <div className="limiter">
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
      </div> */
}
