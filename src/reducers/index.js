import { combineReducers } from "redux";
import hpdReducer from './hpd_reducer';

export default combineReducers({
  hpdViolations: hpdReducer,
})
