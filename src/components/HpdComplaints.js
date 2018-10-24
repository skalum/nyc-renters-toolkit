import React from 'react';

import {
  Table, } from 'reactstrap';

const HpdComplaints = (props) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Agency</th>
            <th>Type</th>
            <th>Resolution</th>
          </tr>
        </thead>
        <tbody>
          {props.complaints.map((complaint, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{complaint.created_date}</td>
              <td>{complaint.agency}</td>
              <td>{complaint.complaint_type}</td>
              <td>{complaint.resolution_description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default HpdComplaints;
