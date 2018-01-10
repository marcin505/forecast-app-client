//import { history } from 'components/router/History';
import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGGIN } from 'redux/actions/actionTypes';
import * as AuthActions from 'redux/actions/authActions';
//import { EMAIL_TOKEN, ADMIN_MIGRATIONS, USER_MIGRATION_OVERVIEW, MAIN } from 'components/router/Routes';
//import * as AuthActions from 'redux/actions/authActions';
import { loginRequest } from 'api/loginAPI.js';
//import { ADMIN } from 'api/userTypes';

export function* loginSaga({ payload: { email } }) {
    try {
    yield call(loginRequest, email);
    yield put(AuthActions.loginSuccess({ email }));
  } catch (error) {
    yield put(AuthActions.loginFailed());
  }
}

export default function* watch() {
  yield* [
    takeLatest(LOGGIN, loginSaga),
  ];
}
