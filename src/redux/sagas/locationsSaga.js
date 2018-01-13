//import { history } from 'components/router/History';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
    CITY_SEARCH
} from 'redux/actions/actionTypes';
import * as LocationsActions from 'redux/actions/locationsActions';
import { citySearchRequest } from 'api/locationsAPI.js';

function* citySearchSaga ({payload: {query}}) {
   try {
    if (query.length > 3) {
       const cities = yield call(citySearchRequest, query);
       yield put(LocationsActions.citySearchSuccess({cities}))
    } else {
       yield put (LocationsActions.resetCities())
    }
  } catch (error) {
    yield put(LocationsActions.citySearchFailed());
    yield put (LocationsActions.resetCities())
   }
}

export default function* watch() {
  yield* [
    takeLatest(CITY_SEARCH, citySearchSaga),
  ]
}
