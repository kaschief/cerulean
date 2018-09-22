import React, { Component } from 'react';
import allcolors from '../allcolors.json';
import Meanings from '../meanings.json';
import Info from './Info';
import Range from './Range';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hex: `#${this.props.match.params.id}`,
      name: '',
      rgb: {},
      meaning: ''
    };
  }

  componentDidMount = () => {
    let name = allcolors.find(c => {
      return c.hex === `${this.state.hex}`;
    }).name;
    // let meaning = meanings.find(c=>{
    //   return c.name ===
    // })
    let rgb = allcolors.find(c => {
      return c.hex === `${this.state.hex}`;
    }).rgb;
    console.log('this is the NAME------>', name, rgb);
    this.setState({
      name: name,
      rgb: rgb
    });
  };
  render() {
    let r = this.state.rgb.r;
    let g = this.state.rgb.g;
    let b = this.state.rgb.b;
    console.log('success', this.props);
    return (
      <div className="Details text-center">
        <div className="title" style={{ backgroundColor: `${this.state.hex}` }}>
          <h1>{this.state.name}</h1>
        </div>
        <div className="main-div">
          <Info hex={this.state.hex} name={this.state.name} r={r} g={g} b={b} />
        </div>
        <div className="title slider-div">
          <p>Slide to change color</p>
          <Range className="slider" value={r} />
          <Range className="slider" value={g} />
          <Range className="slider" value={b} />
        </div>
      </div>
    );
  }
}

export default Details;

// const mainStyle = {
//   //backgroundColor: `${this.state.color}`,
//   height: '90vh',
//   //width: '0vw'
//   border: '1px solid black',
//   borderRadius: '25px',
//   marginTop: '5%'
// };
