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
      brandColor: 'blue'
    };

    this.changeCerulean = this.changeCerulean.bind(this);
  }

  changeCerulean(color) {
    console.log('changing the hex code fo brandcolor-->', color);
    this.setState({
      brandColor: color
    });
  }
  render() {
    return (
      <div className="App">
        <MyNav color={this.state.brandColor} />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route
              path="/colors"
              render={props => (
                <Colors {...props} onHover={this.changeCerulean} />
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
