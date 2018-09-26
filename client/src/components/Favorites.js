import React, { Component } from 'react';
import api from '../api';
import Box from './Box';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
  }

  componentDidMount(props) {
    document.body.className = 'pg1';

    api.getColors().then(colors => {
      this.setState({
        colors: colors
      });
    });
  }

  componentWillUnmount() {
    document.body.className = 'body';
  }

  render() {
    return (
      <div className="Favorite">
        <div className="my-colors">
          <h2>My Favorite Colors</h2>
        </div>
        <div className="Favorites text-center container">
          <div className="Group">
            {this.state.colors.map(c => (
              <Box
                key={c.hex}
                name={c.name}
                hex={c.hex}
                rgb={c.rgb}
                onHover={this.props.onHover}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
