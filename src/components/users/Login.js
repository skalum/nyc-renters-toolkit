import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

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
      <div className="container mt-5">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Sign in</h1>
        </div>
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
