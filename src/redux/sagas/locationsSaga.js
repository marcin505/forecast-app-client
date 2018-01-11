//import { history } from 'components/router/History';
import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import {
    CITY_SEARCH,
    CITY_SEARCH_SUCCESS,
    CITY_SEARCH_FAILED,
} from 'redux/actions/actionTypes';
import * as LocationsActions from 'redux/actions/locationsActions';
import { citySearchRequest } from 'api/locationsAPI.js';


export const citySearchSaga = function* ({payload: {query}}) {
   console.log('dupa');
   try {
       // console.log(query)
    const cities = yield call(citySearchRequest, query);
    yield put(LocationsActions.citySearchSuccess({cities}))

  } catch (error) {
    yield put(LocationsActions.citySearchFailed());
  }
}



export default function* watch() {
   console.log('kurde')
  yield* [
    takeLatest(CITY_SEARCH, citySearchSaga),
  ];
}
