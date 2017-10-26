import { combineReducers } from 'redux';
import auth from 'redux/reducers/authReducer';
import employees from 'redux/reducers/employeesReducer'

const rootReducer = combineReducers({
  auth,
  employees,
});

export default rootReducer;
