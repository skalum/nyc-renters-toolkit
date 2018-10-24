export default function hpdReducer (state = {
  loadingViolations: false,
  loadingComplaints: false,
  violations: [],
  complaints: [],
}, action) {
  switch(action.type) {
    case 'LOADING_VIOLATIONS':
      return {
        ...state,
        loadingViolations: true
      };

    case 'FETCH_VIOLATIONS':
      return {
        ...state,
        loadingViolations: false,
        violations: action.violations,
      };

    case 'LOADING_COMPLAINTS':
      return {
        ...state,
        loadingComplaints: true,
      }

    case 'FETCH_COMPLAINTS':
      return {
        ...state,
        loadingComplaints: false,
        complaints: action.complaints,
      }

    default:
      return state;
  }
}
