import React, { Component } from 'react';
import Search from './Search';
import Box from './Box';
import allcolors from '../allcolors.json';

const MAX_RESULT = 200;

export default class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      randomcolors: [],
      maincolors: allcolors, //allcolors.slice(0, 30)
      displayedColors: allcolors.slice(0, MAX_RESULT)
    };
  }

  // componentDidMount() {
  //   let randomArr = [];
  //   for (let i = 0; i <= 200; i++) {
  //     let randomIndex = Math.floor(
  //       Math.random() * this.state.maincolors.length
  //     );
  //     randomArr.push(this.state.maincolors[randomIndex]);
  //   }
  //   this.setState({
  //     randomcolors: randomArr
  //   });

  // }

  inputHandle = event => {
    //capture new search term
    let newTerm = event.target.value;
    this.setState({
      searchTerm: newTerm
    });
    let delay = 200;
    setTimeout(() => {
      //console.log('setTimeout', newTerm, this.state.searchTerm);
      if (newTerm === this.state.searchTerm) {
        //console.log('MATCH');
        let lowerSearch = this.state.searchTerm.toLowerCase();
        if (lowerSearch === '') {
          this.setState({
            displayedColors: this.state.maincolors
              .slice()
              .sort((a, b) => Math.random() - 0.5)
              .slice(0, MAX_RESULT)
          });
          return;
        }
        this.setState({
          displayedColors: this.state.maincolors
            .filter(c => c.name.toLowerCase().includes(lowerSearch))
            .map(c => {
              let score = 0;
              if (c.name.toLowerCase() === lowerSearch) score = 100;
              if (c.name.toLowerCase().startsWith(lowerSearch)) score = 50;
              return { ...c, score };
            })
            .sort((a, b) => b.score - a.score)
            .slice(0, MAX_RESULT)
        });
      }
    }, delay);
  };

  // submitHandle = event => {
  //   event.preventDefault();
  //   this.setState({
  //     searchTerm: newTerm
  //   });
  // };

  render() {
    return (
      <div className="Colors text-center">
        <Search
          search={this.state.searchTerm}
          change={e => this.inputHandle(e)}
          //onSubmit={e => this.submitHandle(e)}
        />
        <div className="Group">
          {this.state.displayedColors.map(c => (
            <Box
              key={c.name}
              onHover={this.props.onHover}
              name={c.name}
              color={c.hex}
            />
          ))}
          {/* {this.state.searchTerm.length <= 2
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
                  return (
                    <Box
                      key={c.name}
                      onHover={this.props.onHover}
                      name={c.name}
                      color={c.hex}
                    />
                  );
                })} */}
        </div>
      </div>
    );
  }
}
