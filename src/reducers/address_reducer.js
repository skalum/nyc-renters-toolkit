export default function hpdReducer (state = {
  loading: false,
  address: {}
}, action) {
  switch(action.type) {
    case 'LOADING_ADDRESS':
      return {
        ...state,
        loading: true
      };

    case 'FETCH_ADDRESS':
      return {
        ...state,
        loading: false,
        address: action.address
      };

    default:
      return state;
  }
}
