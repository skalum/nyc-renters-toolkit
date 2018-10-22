import React, { Component } from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  Button,
  Collapse,
  Container,
  Jumbotron,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import AddressContainer from './containers/AddressContainer'

class App extends Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <>
      <Router>
        <div>
          <Navbar color="light" light expand="md" fixed="top">
            <NavbarBrand href="/">NYC Renter Toolkit</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/hpd/">Complaints, violations, etc.</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>

          <Route exact path="/" component={Home} />
          <Route path="/hpd" component={Hpd} />
        </div>
      </Router>
    </>
    );
  }
}

const Home = () => (
  <div role="main" class="container">
    <br /><br /><br />
      <Jumbotron>
        <h1 className="display-3">Weclcome to the NYC Renter Toolkit!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
  </div>
)

const Hpd = () => (
  <h2>Test Hpd</h2>
)

export default App;
