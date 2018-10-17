import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchHpdViolations } from '../actions/hpdActions'

import HpdViolations from '../components/HpdViolations'

class HpdContainer extends Component {

  componentDidMount() {
    this.props.fetchHpdViolations(this.props.address.bin);
  }

  render() {
    return (
      <div>
        <HpdViolations violations={this.props.violations} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  violations: state.hpdViolations.violations,
});

export default connect(mapStateToProps, { fetchHpdViolations })(HpdContainer);
