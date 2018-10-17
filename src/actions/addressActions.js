export function setAddress({houseNumber, street, zip}) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ADDRESS' });
    return fetch(`https://api.cityofnewyork.us/geoclient/v1/address.json?houseNumber=${houseNumber}&street=${street}&zip=${zip}&app_id=f9c9628a&app_key=330f11b7efef935b69550b93499bc7a3`)
      .then(response => response.json())
      .then(addressContainer => dispatch({ type: 'FETCH_ADDRESS', address: addressContainer.address }));
  };
}
