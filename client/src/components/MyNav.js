import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import api from '../api';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

export default class MyNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogoutClick(e) {
    api.logout();
  }

  render() {
    return (
      <div>
        <Navbar dark expand="sm" className="IronNavbar">
          <Container>
            <NavbarBrand style={{ color: `${this.props.color}` }} href="/">
              Cerulean
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  {!api.isLoggedIn() && <Link to="/login">Login</Link>}
                  {!api.isLoggedIn() && <Link to="/signup">Signup</Link>}
                  {api.isLoggedIn() && (
                    <Link to="/colors" onClick={e => this.handleLogoutClick(e)}>
                      Logout
                    </Link>
                  )}

                  {/* {api.isLoggedIn() && (
                    <Link to="/logout" onClick={e => this.handleLogoutClick(e)}>
                      Logout
                    </Link>
                  )} */}
                </NavItem>
                <NavItem>
                  <NavLink activeClassName="active" to="/colors">
                    Colors
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Link to="/signup"> Signup</Link>
                </NavItem>
                <NavItem>
                  <Link to="/favorites">Favorites</Link>
                </NavItem>
                <NavItem>
                  <Link to="/secret"> Secret</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
