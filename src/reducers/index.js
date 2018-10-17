import { combineReducers } from "redux";
import hpdReducer from './hpd_reducer';
import addressReducer from './address_reducer'

export default combineReducers({
  hpdViolations: hpdReducer,
  address: addressReducer
})
