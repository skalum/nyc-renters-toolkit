import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signout } from '../../actions/authActions'

class Signout extends Component {

  handleSubmit = event => {
    event.preventDefault();
    this.props.signout();
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Really want to sign out?</h1>
        </div>
        <button onClick={this.handleSubmit}>Sign Out</button>
      </div>
    )
  }
}

export default connect(null, { signout })(Signout)
