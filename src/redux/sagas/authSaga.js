//import { history } from 'components/router/History';
import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGGIN, LOGOUT } from 'redux/actions/actionTypes';
import * as AuthActions from 'redux/actions/authActions';
import { loginRequest, logoutRequest } from 'api/authAPI.js';

export function* loginSaga({ payload: { email, password } }) {
    try {
    const user = yield call(loginRequest, email, password); 
    yield put(AuthActions.loginSuccess({
       email: user.email,
       token: user.token,
       _id: user._id,
    }));
  } catch (error) {
    yield put(AuthActions.loginFailed());
  }
}

export function* logoutSaga() {
  yield call(logoutRequest);
}

export default function* watch() {
  yield* [
    takeLatest(LOGGIN, loginSaga),
    takeLatest(LOGOUT, logoutSaga)
  ];
}
