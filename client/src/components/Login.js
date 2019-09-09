import React, { Component } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    };
  }

  componentDidMount() {
    document.body.className = 'pg1';
  }

  componentWillUnmount() {
    document.body.className = 'body';
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
        this.props.history.push('/favorites');
      })
      .catch(err => {
        this.setState({
          error: 'Please check the username/password and try again'
        });
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
                {this.state.error.length > 0 && (
                  <div className="error-box">
                    <p>{this.state.error}</p>
                  </div>
                )}
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

              <div class="login100-more" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
