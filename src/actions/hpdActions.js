export function fetchHpdViolations(bin) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_VIOLATIONS' });
    return fetch(`https://data.cityofnewyork.us/resource/b2iz-pps8.json?bin=${bin}&$$app_token=97bbm8fXKcBIYPVS059qhJOOk`)
      .then(response => response.json())
      .then(response => dispatch({ type: 'FETCH_VIOLATIONS', violations: response }));
  };
}
