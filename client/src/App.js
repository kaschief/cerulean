import React, { Component } from 'react';
import MyNav from './components/MyNav';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Secret from './components/Secret';
import Logout from './components/Logout';

import Colors from './components/Colors';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hex: '',
      rgb: null
    };

    this.changeCerulean = this.changeCerulean.bind(this);
  }

  changeCerulean(name, hex, rgb) {
    //console.log('changing the hex code fo mainColor-->', color);
    console.log('Current color is -->', name, rgb);
    this.setState({
      name: name,
      hex: hex,
      rgb: rgb
    });
  }
  render() {
    return (
      <div className="App">
        <MyNav color={this.state.hex} />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route
              path="/colors"
              render={props => (
                <Colors
                  {...props}
                  name={this.state.name}
                  hex={this.state.hex}
                  rgb={this.state.rgb}
                  onHover={this.changeCerulean}
                />
              )}
            />
            <Route path="/secret" component={Secret} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
