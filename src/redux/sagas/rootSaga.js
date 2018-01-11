import { call, all, fork, takeEvery } from 'redux-saga/effects';
import authSaga from 'redux/sagas/authSaga';
import locationsSaga from 'redux/sagas/locationsSaga';

export default function* rootSaga() {
   yield all([

      fork(locationsSaga),
      fork(authSaga),
  ]);
}

//
// takeEvery("FRIEND_FETCH_REQUESTED", fetchFriends),
//    takeEvery("CREATE_USER_REQUESTED", createUser)