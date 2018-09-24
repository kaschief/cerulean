import React, { Component } from 'react';
import allcolors from '../allcolors.json';
import Meanings from '../meanings.json';
import Info from './Info';
import Range from './Range';
import axios from 'axios';
import api from '../api';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: 'Hello, welcome to the favorites page'
    };
  }
  componentDidMount(props) {
    api.getColors().then(data => {
      console.log('getting the colors data', data);
      this.setState({
        favorites: 'Got the colors'
      });
    });
  }
  render() {
    return (
      <div className="Favorite">
        <h2>Favorites Page</h2>
        {this.state.favorite}
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
