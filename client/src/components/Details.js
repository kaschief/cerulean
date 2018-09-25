import React, { Component } from 'react';
import allcolors from '../allcolors.json';
import Meanings from '../meanings.json';
import Info from './Info';
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
      monochromatic: [],
      dark: ''
    };
  }

  componentDidMount = () => {
    document.body.className = 'pg1';
    let color = tinycolor(this.state.hex);

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
      monochromatic: monochromatic,
      dark: color.isDark()
    });
  };

  componentWillUnmount() {
    document.body.className = 'body';
  }

  render() {
    let style;
    this.state.dark
      ? (style = {
          color: 'white'
        })
      : (style = { color: 'black' });
    return (
      <div className="Details text-center">
        <div className="title" style={{ backgroundColor: `${this.state.hex}` }}>
          <h1 style={style}>{this.state.name}</h1>
        </div>
        <div className="main-div">
          <Info
            hex={this.state.hex}
            name={this.state.name}
            rgb={this.state.rgb}
            meaning={this.state.meaning}
            family={this.state.family}
            analagous={this.state.analagous}
            tetrad={this.state.tetrad}
            splitcomplement={this.state.splitcomplement}
            monochromatic={this.state.monochromatic}
            dark={this.state.dark}
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
          //dark={this.state.dark}
          onHover={this.props.onHover}
        />
      </div>
    );
  }
}

export default Details;
