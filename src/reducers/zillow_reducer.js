export default function hpdReducer (state = {
  fetchingZillowInfo: false,
  links: {
    homeDetails: '',
    graphsAndData: '',
    mapThisHome: '',
    comps: '',
  },
  zestimate: {
    amount: '',
    lastUpdated: '',
    valueChange: '',
    valuationRange: {
      low: '',
      high: '',
    },
    percentile: '',
  },
  rentZestimate: {
    amount: '',
    lastUpdated: '',
    valueChange: '',
    valuationRange: {
      low: '',
      high: '',
    },
  },
}, action) {
  switch(action.type) {
    case 'FETCHING_ZILLOW_INFO':
      return {
        ...state,
        fetchingZillowInfo: true
      };

    case 'FETCHED_ZILLOW_INFO':
      return {
        ...state,
        fetchingZillowInfo: false,
        links: {
          ...state.links,
          homeDetails: action.payload.links.homedetails,
          graphsAndData: action.payload.links.graphsanddata,
          mapThisHome: action.payload.links.mapthishome,
          comps: action.payload.links.comparables,
        },
        zestimate: {
          ...state.zestimate,
          amount: action.payload.zestimate.amount,
          lastUpdated: action.payload.zestimate["last-updated"],
          valueChange: action.payload.zestimate.valueChange,
          valuationRange: {
            ...state.zestimate.valuationRange,
            low: action.payload.zestimate.valuationRange.low,
            high: action.payload.zestimate.valuationRange.high,
          },
          percentile: action.payload.zestimate.percentile,
        },
        rentZestimate: {
          ...state.rentZestimate,
          amount: action.payload.rentzestimate.amount,
          lastUpdated: action.payload.rentzestimate["last-updated"],
          valueChange: action.payload.rentzestimate.valueChange,
          valuationRange: {
            ...state.rentZestimate.valuationRange,
            low: action.payload.rentzestimate.valuationRange.low,
            high: action.payload.rentzestimate.valuationRange.high,
          },
        },
      };

    default:
      return state;
  }
}
