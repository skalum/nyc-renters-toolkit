export function fetchHpdViolations(bin) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_VIOLATIONS' });
    return fetch(`https://data.cityofnewyork.us/resource/b2iz-pps8.json?bin=${bin}&$$app_token=${SuperAgent.get(process.env.REACT_APP_NYC_OPEN_DATA_APP_TOKEN)}`)
      .then(response => response.json())
      .then(violations => dispatch({ type: 'FETCH_VIOLATIONS', violations }));
  };
}
