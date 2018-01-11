//import { history } from 'components/router/History';
import { takeLatest, call, put } from 'redux-saga/effects';
import {   
    CITY_SEARCH,
    // CITY_SEARCH_SUCCESS,
    // CITY_SEARCH_FAILED,
} from 'redux/actions/actionTypes';
import * as LocationsActions from 'redux/actions/locationsActions';
import { citySearch } from 'api/locationsAPI.js';

function* citySearchSaga({ payload: { query } }) {
    try {
    const cities = yield call(loginRequest, query); 
    yield put(LocationsActions.citySearchSuccess({
        email: user.email,
        token: user.token,
        _id: user._id,
     }));
    
  } catch (error) {
    yield put(LocationsActions.citySearchFailed());
  }
}

export default function* watch() {
  yield* [
    takeLatest(CITY_SEARCH, citySearchSaga),
  ];
}
