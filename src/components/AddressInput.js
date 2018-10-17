import React, { Component } from 'react';

class AddressInput extends Component {
  state = {
    houseNumber: '',
    street: '',
    zip: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.setAddress(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="houseNumber"
            value={this.state.houseNumber}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="street"
            value={this.state.street}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="zip"
            value={this.state.zip}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default AddressInput;
