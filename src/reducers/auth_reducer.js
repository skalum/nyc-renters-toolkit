const initialState = {
  isAuthenticated: localStorage.getItem('renter.token') ? true : false,
  isAuthenticating: false,
  currentUser: {},
  errorMessage: ''
}

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case 'AUTHENTICATION_REQUEST':
      return {
        ...state,
        isAuthenticating: true,
      };

    case 'AUTHENTICATION_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        isAuthenticating: false,
        currentUser: action.currentUser
      };

    case 'AUTHENTICATION_FAILURE':
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
        currentUser: {},
        errorMessage: action.message
      };

    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isAuthenticating: true,
        isAuthenticated: false,
        currentUser: {},
        errorMessage: ''
      };

    default:
      return state;
  }
}
