export function setAddress({houseNumber, street, zip}, user) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ADDRESS' });
    fetch(`https://api.cityofnewyork.us/geoclient/v1/address.json?houseNumber=${houseNumber}&street=${street}&zip=${zip}&app_id=f9c9628a&app_key=330f11b7efef935b69550b93499bc7a3`)
      .then(response => response.json())
      .then(response => {
        const config = {
          method: 'PUT',
          body: JSON.stringify({
            bin: response.address.buildingIdentificationNumber,
          }),
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          }
        }

        fetch(`api/users/${user.id}`, config);
        dispatch({ type: 'FETCH_ADDRESS', address: response.address })
      });
  };
}

export function setRegistrationId(bin) {
  return dispatch => {
    dispatch({type: 'LOADING_REGISTRATION_ID'});
    return fetch(`https://data.cityofnewyork.us/resource/39m2-a2pz.json?bin=${bin}&$$app_token=97bbm8fXKcBIYPVS059qhJOOk`)
      .then(response => response.json())
      .then(response => dispatch({type: 'FETCH_REGISTRATION_ID', registrationid: response[0].registrationid}));
  };
}

export function setRegistrationInfo(registrationid) {
  return dispatch => {
    dispatch({type: 'LOADING_REGISTRATION_INFO'});
    fetch(`https://data.cityofnewyork.us/resource/sq9v-buh2.json?registrationid=${registrationid}&$$app_token=97bbm8fXKcBIYPVS059qhJOOk`)
      .then(response => response.json())
      .then(registrationinfo => dispatch({type: 'FETCH_REGISTRATION_INFO', registrationinfo: registrationinfo}));
  }
}
