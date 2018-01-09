import { combineReducers } from 'redux';
import auth from 'redux/reducers/authReducer';
import weather from 'redux/reducers/weatherReducer'

const rootReducer = combineReducers({
  auth,
  weather,
});

export default rootReducer;
