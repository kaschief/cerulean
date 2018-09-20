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
  render() {
    return (
      <div className="App">
        <MyNav />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/colors" component={Colors} />
            <Route path="/secret" component={Secret} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
