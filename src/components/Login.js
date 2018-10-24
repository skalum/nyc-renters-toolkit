import React, { Component } from 'react';
import { connect } from 'react-redux';
import login from '../actions/authActions'

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome back! Sign in to continue.</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label><br />
            <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
          </div>
          <br></br>
          <div>
            <label>Password:</label><br />
            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <br></br>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, { login })(LoginForm)
