export function fetchHpdViolations() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_VIOLATIONS' });
    return fetch('https://data.cityofnewyork.us/resource/b2iz-pps8.json?bin=1053397&$$app_token=97bbm8fXKcBIYPVS059qhJOOk')
      .then(response => response.json())
      .then(violations => dispatch({ type: 'FETCH_VIOLATIONS', violations }));
  };
}