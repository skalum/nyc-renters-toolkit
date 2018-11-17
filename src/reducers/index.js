import { combineReducers } from "redux";
import hpdReducer from './hpd_reducer';
import addressReducer from './address_reducer'
import authReducer from './auth_reducer'
import zillowReducer from './zillow_reducer'

export default combineReducers({
  hpdViolations: hpdReducer,
  address: addressReducer,
  auth: authReducer,
  zillow: zillowReducer,
})
