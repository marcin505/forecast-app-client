//import { history } from 'components/router/History';
import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGGIN, LOGOUT, LOGOUT_SUCCESS } from 'redux/actions/actionTypes';
import * as AuthActions from 'redux/actions/authActions';
import { loginRequest, logoutRequest } from 'api/authAPI.js';

export function* loginSaga({ payload: { email, password } }) {
    try {
    console.log(9, email, password);
    const user = yield call(loginRequest, email, password); 
    yield put(AuthActions.loginSuccess({ email: user.email, token: user.token }));
  } catch (error) {
    yield put(AuthActions.loginFailed());
  }
}

export function* logoutSaga() {
  yield call(logoutRequest);
  yield put(AuthActions.logoutSuccess());
}

export default function* watch() {
  console.log('kurde');
  yield* [
    takeLatest(LOGGIN, loginSaga),
    takeLatest(LOGOUT, logoutSaga)
  ];
}
