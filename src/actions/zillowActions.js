let parseString = require ('xml2js').parseString;

export function fetchZillowInfo(address) {
  return dispatch => {
    dispatch({ type: "FETCHING_ZILLOW_INFO" });
    return fetch(`http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz189b3urp4az_5cfwc&address=${address.houseNumber + ' ' + address.street + ' ' + address.apt}&citystatezip=${address.city + ' ' + 'NY ' + address.zip}&rentzestimate=true`)
      .then(response => response.text())
      .then(response => parseString(response, { explicitArray: false, ignoreAttrs: true, }, function (err, result) {
        dispatch({ type: "FETCHED_ZILLOW_INFO", payload: result["SearchResults:searchresults"].response.results.result })
      }))
  }
}
