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
            <NavbarBrand
              className="essential"
              style={{ color: `${this.props.color}` }}
              href="/"
            >
              Cerulean
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink activeClassName="active" to="/colors">
                    Colors
                  </NavLink>
                </NavItem>
                <NavItem className="hovered">
                  {!api.isLoggedIn() && <Link to="/login">Login</Link>}
                  {!api.isLoggedIn() && <Link to="/signup">Signup</Link>}
                  {api.isLoggedIn() && (
                    <NavItem>
                      <Link to="/favorites">Favorites</Link>
                      <Link
                        to="/colors"
                        onClick={e => this.handleLogoutClick(e)}
                      >
                        Logout
                      </Link>
                    </NavItem>
                  )}
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
