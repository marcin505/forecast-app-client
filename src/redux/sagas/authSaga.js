//import { history } from 'components/router/History';
import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGGIN, LOGOUT, PROFILE } from 'redux/actions/actionTypes';
import * as AuthActions from 'redux/actions/authActions';
import { loginRequest, logoutRequest, profileRequest } from 'api/authAPI.js';

export const loginSaga = function* loginSaga({ payload: { email, password } }) {
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

export const logoutSaga =  function* logoutSaga() {
  yield call(logoutRequest);
  localStorage.setItem('token', '');
}

export const profileSaga = function* profileSaga() {
   try {
      const token = localStorage.getItem('token');
      const user = yield call(profileRequest, token);
      yield put(AuthActions.profileSuccess({
         email: user.email,
         _id: user._id,
      }));
   } catch (error) {
      yield put(AuthActions.profileFailed());
   }
}

export default function* watch() {
  yield* [
    takeLatest(LOGGIN, loginSaga),
    takeLatest(LOGOUT, logoutSaga),
    takeLatest(PROFILE, profileSaga),
  ];
}
