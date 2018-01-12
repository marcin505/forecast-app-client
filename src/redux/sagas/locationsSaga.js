//import { history } from 'components/router/History';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
    CITY_SEARCH
} from 'redux/actions/actionTypes';
import * as LocationsActions from 'redux/actions/locationsActions';
import { citySearchRequest } from 'api/locationsAPI.js';


function* citySearchSaga ({payload: {query}}) {
   console.log('citySearch ', query) 
   try {
       // console.log(query)
    const cities = yield call(citySearchRequest, query);
    yield put(LocationsActions.citySearchSuccess({cities}))
  } catch (error) {
    yield put(LocationsActions.citySearchFailed());
  }
}

export default function* watch() {
  yield* [
    takeLatest(CITY_SEARCH, citySearchSaga),
  ]
}
