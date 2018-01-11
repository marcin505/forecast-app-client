import { combineReducers } from 'redux';
import auth from 'redux/reducers/authReducer';
import weather from 'redux/reducers/weatherReducer';
import locations from 'redux/reducers/locationsReducer';

const rootReducer = combineReducers({
  auth,
  weather,
  locations,
});

export default rootReducer;
