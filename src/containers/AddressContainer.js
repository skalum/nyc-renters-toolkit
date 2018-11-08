import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddressInput from '../components/AddressInput'
import Address from '../components/Address'

import { setAddress } from '../actions/addressActions'

class AddressContainer extends Component {

  componentDidMount() {
    if (!this.props.address.houseNumber && this.props.user.houseNumber !== '') {
      this.props.setAddress(this.props.user, this.props.user);
    }
  }

  render() {
    return (
      <div className="container mt-5 pt-5">
        <Address address={this.props.address} />
        <AddressInput setAddress={this.props.setAddress} user={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  address: state.address.address,
  user: state.auth.currentUser,
});

export default connect(mapStateToProps, { setAddress })(AddressContainer);
