import { takeLatest, call, put } from 'redux-saga/effects';
import {
  CITY_SEARCH
} from 'redux/actions/actionTypes';
import * as LocationsActions from 'redux/actions/locationsActions';
import { citySearchRequest } from 'api/locationsAPI.js';

export function* citySearchSaga({ payload: { query } }) {
  try {
    const cities = yield call(citySearchRequest, query);
    yield put(LocationsActions.citySearchSuccess({ cities }));
  } catch (error) {
    yield put(LocationsActions.citySearchFailed({error}));
    yield put(LocationsActions.resetCities())
  }
}

export default function* watch() {
  yield* [
    takeLatest(CITY_SEARCH, citySearchSaga),
  ]
}
