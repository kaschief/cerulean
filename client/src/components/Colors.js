import React, { Component } from 'react';
import Search from './Search';
import Box from './Box';
import allcolors from '../allcolors.json';

export default class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      randomcolors: [],
      maincolors: allcolors //allcolors.slice(0, 30)
    };
  }

  componentDidMount() {
    let randomArr = [];
    for (let i = 0; i <= 200; i++) {
      let randomIndex = Math.floor(
        Math.random() * this.state.maincolors.length
      );
      randomArr.push(this.state.maincolors[randomIndex]);
    }
    this.setState({
      randomcolors: randomArr
    });
  }

  inputHandle = event => {
    //capture new search term
    let newTerm = event.target.value;
    this.setState({
      searchTerm: newTerm
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="Colors text-center">
        <Search
          search={this.state.searchTerm}
          onChange={e => this.inputHandle(e)}
        />
        <div className="Group">
          {this.state.searchTerm === ''
            ? this.state.randomcolors.map(c => {
                return (
                  <Box
                    key={c.name}
                    onHover={this.props.onHover}
                    name={c.name}
                    color={c.hex}
                  />
                );
              })
            : this.state.maincolors
                .filter(c => {
                  return c.name.toLowerCase().includes(this.state.searchTerm);
                })
                .map(c => {
                  return <Box key={c.name} name={c.name} color={c.hex} />;
                })}
        </div>
      </div>
    );
  }
}
