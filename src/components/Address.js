import React from 'react';

const Address = (props) => {

  return (
    <div>
      <h1>{props.address.houseNumber} {props.address.boePreferredStreetName}</h1>
    </div>
  )
}

export default Address;
