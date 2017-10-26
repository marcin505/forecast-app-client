//import { history } from 'components/router/History';
import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGGING_BY_EMAIL } from 'redux/actions/actionTypes';
import * as AuthActions from 'redux/actions/authActions';
//import { EMAIL_TOKEN, ADMIN_MIGRATIONS, USER_MIGRATION_OVERVIEW, MAIN } from 'components/router/Routes';
//import * as AuthActions from 'redux/actions/authActions';
import { loginByEmail} from 'api/loginAPI.js';
//import { ADMIN } from 'api/userTypes';

export function* loginByEmailSaga({ payload: { email } }) {
  try {
    yield call(loginByEmail, email);
    yield put(AuthActions.loginByEmailSuccess({ email }));
  } catch (error) {
    yield put(AuthActions.loginByEmailFailed());
  }
}

export default function* watch() {
  yield* [
    takeLatest(LOGGING_BY_EMAIL, loginByEmailSaga),
  ];
}
