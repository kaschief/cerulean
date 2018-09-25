import React, { Component } from 'react';
import MyNav from './components/MyNav';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Secret from './components/Secret';
import Details from './components/Details';
import Favorites from './components/Favorites';
import NotFound from './components/NotFound';

import Colors from './components/Colors';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import tinycolor from 'tinycolor2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL:
        'https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?ixlib=rb-0.3.5&s=974c85db1b734c7d1630f3a32f0cc15a&auto=format&fit=crop&w=1534&q=80',
      name: '',
      hex: '',
      rgb: null,
      dark: ''
    };

    this.changeCerulean = this.changeCerulean.bind(this);
  }

  changeCerulean(name, hex, rgb) {
    //console.log('Current color is -->', name, rgb);
    // let color = tinycolor(this.state.hex);
    // let dark = color.isDark();
    this.setState({
      name: name,
      hex: hex,
      rgb: rgb
      // dark: dark
    });
  }

  imageChange() {
    this.setState({
      imageURL: ''
    });
  }
  render() {
    return (
      <div className="App">
        <MyNav color={this.state.hex} />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route
              exact
              path="/colors"
              render={props => (
                <Colors
                  class
                  {...props}
                  name={this.state.name}
                  hex={this.state.hex}
                  rgb={this.state.rgb}
                  //dark={this.state.dark}
                  onHover={this.changeCerulean}
                />
              )}
            />
            <Route exact path="/secret" component={Secret} />
            <Route
              path="/colors/:id"
              render={props => (
                <Details
                  {...props}
                  name={this.state.name}
                  hex={this.state.hex}
                  rgb={this.state.rgb}
                  onHover={this.changeCerulean}
                />
              )}
            />
            <Route
              exact
              path="/favorites"
              render={props => (
                <Favorites {...props} onHover={this.changeCerulean} />
              )}
            />
            <Route path="" component={NotFound} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
