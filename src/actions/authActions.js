function authenticationRequest(creds) {
  return {
    type: 'AUTHENTICATION_REQUEST',
    isAuthenticating: true,
    isAuthenticated: false,
    creds
  }
}

function setCurrentUser(user) {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    isAuthenticating: false,
    isAuthenticated: true,
    currentUser: user
  }
}

function loginError(message) {
  return {
    type: 'AUTHENTICATION_FAILURE',
    isAuthenticating: false,
    isAuthenticated: false,
    message
  }
}

export default function login(creds, router) {
  let config = {
    method: 'POST',
    body: JSON.stringify({
      user: creds
    }),
    headers: {
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    dispatch(authenticationRequest(creds))
    return fetch('/api/auth', config)
      .then(response => response.json())
      .then(body => {
        if (body.user.id) {
          localStorage.setItem('renter.token', body.token);
          dispatch(setCurrentUser(body.user));
          router.replace(`/`)
        } else {
          dispatch(loginError(body.error))
          return Promise.reject(body)
        }
    }).catch(err => console.log("Error: ", err))
  }
}
