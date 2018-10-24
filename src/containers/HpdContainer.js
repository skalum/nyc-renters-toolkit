import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import { fetchHpdViolations } from '../actions/hpdActions'

import HpdViolations from '../components/HpdViolations'

class HpdContainer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentDidMount() {
    this.props.fetchHpdViolations(this.props.bin);
  }

  render() {
    return (
      <div className="container mt-5 pt-5">
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
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <HpdViolations violations={this.props.violations} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">

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
  violations: state.hpdViolations.violations,
});

export default connect(mapStateToProps, { fetchHpdViolations })(HpdContainer);
