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
    console.log('BEFORE', this.state.randomcolors);

    let randomArr = [];
    for (let i = 0; i <= 15; i++) {
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
    console.log('SEARCH TERM', this.state.searchTerm);
  };

  render() {
    return (
      <div className="Colors text-center">
        <Search
          search={this.state.searchTerm}
          onChange={e => this.inputHandle(e)}
        />
        <div className="Group">
          {this.state.randomcolors.map(c => {
            return <Box key={c.hex} name={c.name} color={c.hex} />;
          })}
        </div>
      </div>
    );
  }
}
