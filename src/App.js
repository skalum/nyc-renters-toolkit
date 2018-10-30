import React, { Component } from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from 'react-redux'

import {
  Button,
  Collapse,
  Container,
  Jumbotron,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem, } from 'reactstrap';

import AddressContainer from './containers/AddressContainer'
import ProfileContainer from './containers/ProfileContainer'
import HpdContainer from './containers/HpdContainer'
import Login from './components/users/Login'
import Signup from './components/users/Signup'

import login from './actions/authActions'
import { setAddress } from './actions/addressActions'

class App extends Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.login({token: localStorage["renter.token"]}, this.props.history);
    }
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
                  {this.props.isAuthenticated &&
                    <>
                      <NavItem>
                        <NavLink className="nav-link" to="/address">Set Address</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link" to="/profile">Profile</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link" to="/311">311</NavLink>
                      </NavItem>
                      </>
                  }
                  {!this.props.isAuthenticated &&
                    <>
                      <NavItem>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link" to="/signup">Login</NavLink>
                      </NavItem>
                    </>
                  }
                </Nav>
              </Collapse>
            </Navbar>

            <Route exact path="/" component={Home} />
            <Route path="/address" component={AddressContainer} />
            <Route path="/profile" component={ProfileContainer} />
            <Route path="/311" component={HpdContainer} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
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
        <p className="lead">All the information you need about your building and neighborhood!</p>
        <hr className="my-2" />
        <p>Click below to get started...</p>
        <p className="lead">
          <Button color="primary">Log in</Button>
        </p>
      </Jumbotron>
  </div>
)

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.currentUser,
  address: state.address.address,
});

export default connect(mapStateToProps, { login, setAddress })(App);
