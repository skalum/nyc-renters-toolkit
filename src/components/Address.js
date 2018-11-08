import React from 'react';

const Address = (props) => {

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Current Address</h1>
      </div>
      {props.address.houseNumber &&
        <>
          {props.address.houseNumber} {props.address.boePreferredStreetName}<br />
          {props.address.uspsPreferredCityName}, NY {props.address.zipCode}< br />
          <br />
          To change, enter a new address below:
        </>
      }
      {!props.address.houseNumber &&
        <>
          None saved. Please enter a new address below:
        </>
      }
      <br /><br /><br />
    </>
  )
}

export default Address;
