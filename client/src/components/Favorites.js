import React, { Component } from 'react';
import allcolors from '../allcolors.json';
import Meanings from '../meanings.json';
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
    api.getColors().then(colors => {
      this.setState({
        colors: colors
      });
    });
  }
  render() {
    return (
      <div className="Favorite">
        <div className="my-colors">
          <h2>My Favorite Colors</h2>
        </div>

        <div className="Favorites text-center container">
          {/* <Search
            search={this.state.searchTerm}
            change={e => this.inputHandle(e)}
          /> */}
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
