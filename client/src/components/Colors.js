import React, { Component } from 'react';
import Box from './Box';
import Search from './Search';
import allcolors from '../allcolors.json';
// import tinycolor from 'tinycolor2';

const MAX_RESULT = 200;

const mainBg = {
  backgroundImage:
    'url("https://images.unsplash.com/photo-1533568024501-de28de1280c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a75db13d7de4af6166c7f885998763b&auto=format&fit=crop&w=993&q=80")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

export default class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      maincolors: allcolors, //allcolors.slice(0, 30)
      displayedColors: allcolors.slice(0, MAX_RESULT)
    };
  }

  componentDidMount() {
    document.body.className = 'pg1';
  }

  componentWillUnmount() {
    document.body.className = 'body';
  }
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
            .filter(
              c =>
                c.name.toLowerCase().includes(lowerSearch) ||
                c.hex.toLowerCase().includes(lowerSearch)
            )
            .map(c => {
              let score = 0;
              if (
                c.name.toLowerCase() === lowerSearch ||
                c.hex.toLowerCase() === lowerSearch
              )
                score = 100;
              if (
                c.name.toLowerCase().startsWith(lowerSearch) ||
                c.hex.toLowerCase().startsWith(lowerSearch)
              )
                score = 50;
              return { ...c, score };
            })
            .sort((a, b) => b.score - a.score)
            .slice(0, MAX_RESULT)
        });
      }
    }, delay);
  };
  render() {
    return (
      <div className="pg1">
        <div className="Colors text-center container">
          <Search
            search={this.state.searchTerm}
            change={e => this.inputHandle(e)}
          />
          <div className="Group">
            {this.state.displayedColors.map(c => {
              return (
                <Box
                  key={c.hex}
                  name={c.name}
                  hex={c.hex}
                  rgb={c.rgb}
                  //dark={this.props.dark}
                  onHover={this.props.onHover}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
