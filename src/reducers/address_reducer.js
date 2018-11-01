export default function hpdReducer (state = {
  loadingAddress: false,
  loadingRegistrationId: false,
  loadingRegistrationInfo: false,
  address: {
    firstBoroughName: ''
  },
  registrationId: '',
  registration: {
    corporateOwner: '',
    agent: '',
  },
}, action) {

  switch(action.type) {
    case 'LOADING_ADDRESS':
      return {
        ...state,
        loadingAddress: true,
      };

    case 'FETCH_ADDRESS':
      return {
        ...state,
        loadingAddress: false,
        address: action.address,
      };

    case 'LOADING_REGISTRATION_ID':
      return {
        ...state,
        loadingRegistrationId: true,
      };

    case 'FETCH_REGISTRATION_ID':
      return {
        ...state,
        loadingRegistrationId: false,
        registrationId: action.registrationid,
      };

    case 'LOADING_REGISTRATION_INFO':
      return {
        ...state,
        loadingRegistrationInfo: true,
      };

    case 'FETCH_REGISTRATION_INFO':
      const corporateOwner = action.registrationinfo.find(o => o.type === 'CorporateOwner').corporationname;
      const agent = action.registrationinfo.find(o => o.type === 'Agent').corporationname;

      return {
        ...state,
        loadingRegistrationInfo: false,
        registration: {
          ...state.registration,
          corporateOwner: corporateOwner,
          agent: agent,
        }
      };

    default:
      return state;
  }
}
