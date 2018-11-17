import React from 'react';

const Address = props => {

  return (
    <>
      {props.address.houseNumber &&
        <>
          {props.address.houseNumber} {props.address.boePreferredStreetName}<br />
          {props.address.uspsPreferredCityName}, NY {props.address.zipCode}< br />
          <br />
          {props.displayInstructions &&
            <>
              To change, enter a new address below:
            </>
          }
        </>
      }
      {!props.address.houseNumber && props.displayInstructions && 
        <>
          None saved. Please enter a new address below:
        </>
      }
      <br /><br /><br />
    </>
  )
}

export default Address;
