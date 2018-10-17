export default function hpdReducer (state = {
  loading: false,
  violations: []
}, action) {
  switch(action.type) {
    case 'LOADING_VIOLATIONS':
      return {
        ...state,
        loading: true
      };

    case 'FETCH_VIOLATIONS':
      return {
        ...state,
        loading: false,
        violations: [
          ...state.violations,
          ...action.violations
        ]
      }

    default:
      return state;
  }
}
