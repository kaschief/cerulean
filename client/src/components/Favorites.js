import React, { Component } from 'react';
import allcolors from '../allcolors.json';
import Meanings from '../meanings.json';
import Info from './Info';
import axios from 'axios';
import api from '../api';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
  }
  componentDidMount(props) {
    api.getColors().then(colors => {
      console.log('getting the colors from the API', colors);
      this.setState({
        colors: colors
      });
      console.log('state was set', this.state);
    });
  }
  render() {
    console.log('AFTER IT MOUNTS', this.state);
    return (
      <div className="Favorite">
        <div className="my-colors">
          <h2>My Favorite Colors</h2>
        </div>
        {/* {this.state.favorites.map(c => {
          return <div>{c.hex}</div>;
        })} */}

        {/* <div className="Colors text-center container">
        <div className="Group">
          {this.state.displayedColors.map(c => (
            <Box
              key={c.hex}
              name={c.name}
              hex={c.hex}
              rgb={c.rgb}
              onHover={this.props.onHover}
            />
          ))}
        </div>
      </div> */}
      </div>
    );
  }
}
