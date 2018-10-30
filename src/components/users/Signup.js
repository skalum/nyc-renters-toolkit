import React, { Component } from 'react';
import { connect } from 'react-redux';

import signup from '../../actions/signupActions'

class SignupForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state, this.props.history);
    this.setState({
      email: '',
      password: '',
      admin: false
    })
  }

  render() {
    return (
      <div>
        <h2>Sign up</h2>
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
          <input type="Submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, { signup })(SignupForm)
