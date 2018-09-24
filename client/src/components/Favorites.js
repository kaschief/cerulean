import React, { Component } from 'react';
import allcolors from '../allcolors.json';
import Meanings from '../meanings.json';
import Info from './Info';
import Range from './Range';
import axios from 'axios';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      hex: `#${this.props.match.params.id}`,
      name: '',
      rgb: {},
      family: '',
      meaning: ''
    };
  }

  // componentDidMount = () => {
  //   let name = allcolors.find(c => {
  //     return c.hex === `${this.state.hex}`;
  //   }).name;

  //   let meaning;
  //   let family;

  //   let result = Meanings.filter(m => {
  //     return new RegExp(m.name, 'i').test(name);
  //   });

  //   if (result.length > 0) {
  //     meaning = result[0].meaning;
  //     family = result[0].name.toUpperCase();
  //   } else {
  //     meaning = '';
  //     family = '';
  //   }

  //   let rgb = allcolors.find(c => {
  //     return c.hex === `${this.state.hex}`;
  //   }).rgb;

  //   this.setState({
  //     name: name,
  //     rgb: rgb,
  //     family: family,
  //     meaning: meaning
  //   });
  // };
  render() {
    // console.log('HERE IS THE STATE', typeof this.state.rgb.r);
    // let r = this.state.rgb.r;
    // let g = this.state.rgb.g;
    // let b = this.state.rgb.b;
    return (
      <div className="Favorites text-center">
        <h1>This is the favorites page</h1>
        <div className="Group">
          {/* <Box
            key={c.hex}
            name={c.name}
            hex={c.hex}
            rgb={c.rgb}
            //onHover={this.props.onHover}
          /> */}
        </div>
      </div>
    );
  }
}
