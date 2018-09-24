import React, { Component } from 'react';
import allcolors from '../allcolors.json';
import Meanings from '../meanings.json';
import Info from './Info';
import Range from './Range';
import tinycolor from 'tinycolor2';
import Dimensions from './Dimensions';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hex: `#${this.props.match.params.id}`,
      name: '',
      rgb: {},
      family: '',
      meaning: '',
      analagous: [],
      tetrad: [],
      splitcomplement: [],
      monochromatic: []
    };
  }

  componentDidMount = () => {
    //find name
    let name = allcolors.find(c => {
      return c.hex === `${this.state.hex}`;
    }).name;

    //find meaning & family
    let meaning;
    let family;

    let result = Meanings.filter(m => {
      return new RegExp(m.name, 'i').test(name);
    });

    if (result.length > 0) {
      meaning = result[0].meaning;
      family = result[0].name.toUpperCase();
    } else {
      meaning = '';
      family = '';
    }

    //get RGB
    let rgb = allcolors.find(c => {
      return c.hex === `${this.state.hex}`;
    }).rgb;

    //get analagous, tetrad, splitcomplement, monochromatic
    let color = tinycolor(this.state.hex);
    // let rgb = color.toRgb();

    let analagous = tinycolor(this.state.hex)
      .analogous()
      .map(function(t) {
        return t.toHexString();
      });

    let tetrad = tinycolor(this.state.hex)
      .tetrad()
      .map(function(t) {
        return t.toHexString();
      });

    let splitcomplement = tinycolor(this.state.hex)
      .splitcomplement()
      .map(function(t) {
        return t.toHexString();
      });

    let monochromatic = tinycolor(this.state.hex)
      .monochromatic()
      .map(function(t) {
        return t.toHexString();
      });

    this.setState({
      name: name,
      rgb: rgb,
      family: family,
      meaning: meaning,
      analagous: analagous,
      tetrad: tetrad,
      splitcomplement: splitcomplement,
      monochromatic: monochromatic
    });
  };
  render() {
    //console.log('HERE IS THE STATE', typeof this.state.rgb.r);
    //console.log('INSIDE DETAILS RENDER--------->', this.state);
    return (
      <div className="Details text-center">
        <div className="title" style={{ backgroundColor: `${this.state.hex}` }}>
          <h1>{this.state.name}</h1>
        </div>
        <div className="main-div">
          <Info
            hex={this.state.hex}
            name={this.state.name}
            rgb={this.state.rgb}
            meaning={this.state.meaning}
            family={this.state.family}
          />
        </div>
        <Dimensions
          className="title dimensions-box"
          hex={this.state.hex}
          name={this.state.name}
          rgb={this.state.rgb}
          meaning={this.state.meaning}
          analagous={this.state.analagous}
          tetrad={this.state.tetrad}
          splitcomplement={this.state.splitcomplement}
          monochromatic={this.state.monochromatic}
          onHover={this.props.onHover}
        />
      </div>
    );
  }
}

export default Details;
