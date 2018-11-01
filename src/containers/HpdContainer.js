import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import { setAddress, setRegistrationId, setRegistrationInfo } from '../actions/addressActions'
import { fetchHpdViolations, fetch311Complaints } from '../actions/hpdActions'

import HpdViolations from '../components/HpdViolations'
import HpdComplaints from '../components/HpdComplaints'

class HpdContainer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  componentDidMount() {
    if (!this.props.houseNumber && this.props.user.houseNumber !== '') {
      this.props.setAddress(this.props.user, this.props.user)
        .then(() => this.props.fetchHpdViolations(this.props.bin))
        .then(() => this.props.fetch311Complaints(this.props.bbl));
    } else {
      this.props.fetchHpdViolations(this.props.bin)
        .then(() => this.props.fetch311Complaints(this.props.bbl));
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="container mt-5 pt-5">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Complaints, Violations, and Problems</h1>
      </div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Violations
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Complaints
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col>
                <HpdViolations violations={this.props.violations} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col>
                <HpdComplaints complaints={this.props.complaints} />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bin: state.address.address.buildingIdentificationNumber,
  bbl: state.address.address.bbl,
  violations: state.hpdViolations.violations,
  complaints: state.hpdViolations.complaints,
  houseNumber: state.address.address.houseNumber,
  user: state.auth.currentUser,
});

export default connect(mapStateToProps, { setRegistrationId, setRegistrationInfo, setAddress, fetchHpdViolations, fetch311Complaints })(HpdContainer);
