import React, { Component } from 'react';
import api from '../api';

class Secret extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secret: null
    };
  }
  componentDidMount(props) {
    api.getSecret().then(data => {
      this.setState({
        secret: data.secret
      });
    });
  }
  render() {
    return (
      <div className="Secret">
        <h2>Secret</h2>
        {this.state.secret}
      </div>
    );
  }
}

export default Secret;
