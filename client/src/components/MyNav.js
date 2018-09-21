import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
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

  render() {
    return (
      <div>
        <Navbar dark expand="md" className="IronNavbar">
          <Container>
            <NavbarBrand style={{ color: `${this.props.color}` }} href="/">
              Cerulean
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {/* <NavItem>
                  {!api.isLoggedIn() && <Link to="/login">Login</Link>}
                  {api.isLoggedIn() && <Link to="/signup">Signup</Link>}
                  {api.isLoggedIn() && (
                    <NavLink to="/" onClick={e => this.handleLogoutClick(e)}>
                      Logout
                    </NavLink>
                  )}
                </NavItem> */}
                <NavItem>
                  <Link to="/colors">
                    <Button text="Colors" />
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/signup">
                    <Button text="Signup" />
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/login">
                    <Button text="Login" />
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/logout">
                    {' '}
                    <Button text="Logout" />
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/secret">
                    {' '}
                    <Button text="Secret" />
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
