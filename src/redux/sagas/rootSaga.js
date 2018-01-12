import { all, fork } from 'redux-saga/effects';
import authSaga from 'redux/sagas/authSaga';
import locationsSaga from 'redux/sagas/locationsSaga';

export default function* rootSaga() {
   yield all([
      fork(locationsSaga),
      fork(authSaga),
  ]);
}
