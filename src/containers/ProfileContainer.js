import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRegistrationId, setRegistrationInfo } from '../actions/addressActions'

import {
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
  ListGroupItemHeading,
  UncontrolledTooltip, } from 'reactstrap';

class ProfileContainer extends Component {

  render() {
    this.props.setRegistrationId(this.props.bin)
      .then(() => this.props.setRegistrationInfo(this.props.registrationId));

    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Profile</h1>
        </div>
        <section className="row bordered">
          <div className="col">
            <h4>Lot</h4>
            <dl>
              <dt>Address</dt>
              <dd>
                {this.props.houseNumber} {this.props.streetName} <br />
                {this.props.city}, {this.props.zip}
              </dd>
              <dt>BBL</dt>
              <dd>
                <span href="#" id="bbl">{this.props.bbl}</span>
                <UncontrolledTooltip placement="top" target="bbl">
                  Boro: {this.props.bblBoroughCode}, Block: {this.props.bblTaxBlock}, Lot: {this.props.bblTaxLot}
                </UncontrolledTooltip>
              </dd>
              <dt>Condo Number</dt>
              <dd>{this.props.dofCondominiumIdentificationNumber}</dd>
              <dt>Owned By</dt>
              <dd>{this.props.corporateOwner}</dd>
              <dt>Services Managed By</dt>
              <dd>{this.props.agent}</dd>
            </dl>
          </div>
          <div className="col">
            <h4>Neighborhood</h4>
            <dl>
              <dt>Neighborhood</dt>
              <dd>{this.props.ntaName}</dd>
              <dt>Community District</dt>
              <dd>{this.props.communityDistrictNumber}</dd>
              <dt>City Council</dt>
              <dd>{this.props.cityCouncilDistrict}</dd>
              <dt>Police Precinct</dt>
              <dd>{this.props.policePrecinct}</dd>
              <dt>Fire Company</dt>
              <dd>{this.props.fireCompanyType}{this.props.fireCompanyNumber}</dd>
              <dt>School District</dt>
              <dd>{this.props.communitySchoolDistrict}</dd>
              <dt>Census Tract</dt>
              <dd>{this.props.censusTract2010}</dd>
            </dl>
          </div>
        </section>
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading>Lot</ListGroupItemHeading>
          <dl>
            <ListGroupItemText>
            <dt>Address</dt>
            <dd>3 W 122nd St</dd>
            </ListGroupItemText>
          </dl>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  bin: state.address.address.buildingIdentificationNumber,
  houseNumber: state.address.address.houseNumber,
  streetName: state.address.address.boePreferredStreetName,
  city: state.address.address.uspsPreferredCityName,
  zip: state.address.address.zipCode,
  bbl: state.address.address.bbl,
  bblBoroughCode: state.address.address.bblBoroughCode,
  bblTaxBlock: state.address.address.bblTaxBlock,
  bblTaxLot: state.address.address.bblTaxLot,
  dofCondominiumIdentificationNumber: state.address.address.dofCondominiumIdentificationNumber,
  ntaName: state.address.address.ntaName,
  communityDistrictNumber: state.address.address.communityDistrictNumber,
  cityCouncilDistrict: state.address.address.cityCouncilDistrict,
  policePrecinct: state.address.address.policePrecinct,
  fireCompanyType: state.address.address.fireCompanyType,
  fireCompanyNumber: state.address.address.fireCompanyNumber,
  communitySchoolDistrict: state.address.address.communitySchoolDistrict,
  censusTract2010: state.address.address.censusTract2010,
  registrationId: state.address.registrationId,
  corporateOwner: state.address.registration.corporateOwner,
  agent: state.address.registration.agent,
});

export default connect(mapStateToProps, { setRegistrationId, setRegistrationInfo })(ProfileContainer);
