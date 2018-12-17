import React, { Component } from 'react';
import { connect } from 'react-redux';

import Address from '../components/Address'
import Zillow from '../components/Zillow'

import { fetchZillowInfo } from '../actions/zillowActions'

class ZillowContainer extends Component {

  componentDidMount() {
    const address = {
      houseNumber: this.props.address.houseNumber,
      street: this.props.address.boePreferredStreetName,
      apt: this.props.address.apt,
      city: this.props.address.uspsPreferredCityName,
      zip: this.props.address.zipCode,
    }

    this.props.fetchZillowInfo(address)
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Zillow</h1>
        </div>
        <Address address={this.props.address} />
        <Zillow zillow={this.props.zillow} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  address: state.address.address,
  zillow: state.zillow,
})

export default connect(mapStateToProps, { fetchZillowInfo })(ZillowContainer)
