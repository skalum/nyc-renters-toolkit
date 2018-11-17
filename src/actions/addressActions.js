export function setAddress(address) {
  return (dispatch, getState) => {
    return dispatch(getAddress(address)).then(() => {
      const user = getState().auth.currentUser;
      const fetchedAddress = getState().address.address;
      return dispatch(persistUserAddress(fetchedAddress, user)).then(() => {
        const bin = getState().address.address.buildingIdentificationNumber;
        return dispatch(setRegistrationId(bin)).then(() => {
          if(getState().address.registrationId !== '') {
            const registrationId = getState().address.registrationId;
            return dispatch(setRegistrationInfo(registrationId));
          }
        })
      })
    })
  }
}

export function getAddress(address) {
  return dispatch => {
    dispatch({ type: 'LOADING_ADDRESS' });
    return fetch(`https://api.cityofnewyork.us/geoclient/v1/address.json?houseNumber=${address.houseNumber}&street=${address.street}&zip=${address.zip}&app_id=f9c9628a&app_key=330f11b7efef935b69550b93499bc7a3`)
      .then(response => response.json()).then(response => {
        dispatch({ type: 'LOADED_ADDRESS', address: response.address });
    }, error => {
      dispatch({ type: 'LOAD_ADDRESS_FAILURE' })
    })
  }
}

export function persistUserAddress(address, user) {
  return dispatch => {
    dispatch({ type: 'PERSISTING_USER_ADDRESS' });
    const config = {
      method: 'PUT',
      body: JSON.stringify({
        bin: address.buildingIdentificationNumber,
        houseNumber: address.houseNumber,
        street: address.boePreferredStreetName,
        zip: address.zipCode,
      }),
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      }
    }

    return fetch(`api/users/${user.id}`, config).then(() => {
      dispatch({ type: 'PERSISTED_USER_ADDRESS' })
    },
    error => {
      dispatch({ type: 'PERSIST_USER_FAILURE' })
    })
  }
}

export function setRegistrationId(bin) {
  return dispatch => {
    dispatch({ type: 'LOADING_REGISTRATION_ID' });
    return fetch(`https://data.cityofnewyork.us/resource/39m2-a2pz.json?bin=${bin}&$$app_token=97bbm8fXKcBIYPVS059qhJOOk`)
      .then(response => response.json())
      .then(response => {
        if(response[0]) {
          dispatch({ type: 'FETCH_REGISTRATION_ID', registrationId: response[0].registrationid });
        } else {
          dispatch({ type: 'NO_REGISTRATION_ID' });
        }
    })
  }
}

export function setRegistrationInfo(registrationid) {
  return dispatch => {
    dispatch({type: 'LOADING_REGISTRATION_INFO'});
    fetch(`https://data.cityofnewyork.us/resource/sq9v-buh2.json?registrationid=${registrationid}&$$app_token=97bbm8fXKcBIYPVS059qhJOOk`)
      .then(response => response.json())
      .then(registrationinfo => dispatch({type: 'FETCH_REGISTRATION_INFO', registrationinfo: registrationinfo}));
  }
}
