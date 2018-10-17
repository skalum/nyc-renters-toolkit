import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchHpdViolations } from '../actions/hpdActions'

class HpdContainer extends Component {
  componentDidMount() {
    this.props.fetchHpdViolations();
  }

  render() {
    return (
      <div>
        {this.props.violations.map(violation => (
          <p key={violation.violationid}>
            <strong>{violation.approveddate}</strong><br />
            <span>{violation.novdescription}</span><br />
            {violation.violationstatus === 'Open' &&
              <strong>OPEN</strong>
            }
          </p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  violations: state.hpdViolations.violations
});

export default connect(mapStateToProps, { fetchHpdViolations })(HpdContainer);
