import React from 'react';

import {
  Table, } from 'reactstrap';

const Address = (props) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Location</th>
            <th>Status</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.violations.map((violation, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{violation.inspectiondate}</td>
              <td>{violation.apartment}</td>
              <td>{violation.currentstatus}</td>
              <td>{violation.novdescription}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Address;
