export function fetchHpdViolations(bin) {
  return dispatch => {
    dispatch({ type: 'LOADING_VIOLATIONS' });
    return fetch(`https://data.cityofnewyork.us/resource/b2iz-pps8.json?bin=${bin}&$$app_token=97bbm8fXKcBIYPVS059qhJOOk`)
      .then(response => response.json())
      .then(response => dispatch({ type: 'FETCH_VIOLATIONS', violations: response }));
  };
}

export function fetch311Complaints(bbl) {
  return dispatch => {
    dispatch({ type: 'LOADING_COMPLAINTS' });
    return fetch(`https://data.cityofnewyork.us/resource/fhrw-4uyv.json?bbl=${bbl}&$$app_token=97bbm8fXKcBIYPVS059qhJOOk`)
      .then(response => response.json())
      .then(response => dispatch({ type: 'FETCH_COMPLAINTS', complaints: response }));
  };
}
