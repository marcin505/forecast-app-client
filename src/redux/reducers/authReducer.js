import { fromJS } from 'immutable';
import {
  LOGGING_BY_EMAIL_SUCCESS,
  LOGGING_BY_EMAIL_FAILED
} from 'redux/actions/actionTypes';

export const initialState = fromJS({
  invalidEmail: false,
  invalidEmailOrPassword: false,
  logged: false,
  email: '',
  user: null,
  token: null,
});

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGGING_BY_EMAIL_SUCCESS:
      return state
        .set('logged', true)
        .set('invalidEmail', false)
        .set('email', payload.email);
    case LOGGING_BY_EMAIL_FAILED:
      return state
        .set('logged', false)
        .set('invalidEmail', false)
        .set('email', '');
    default:
    {
      return state;
    }
  }
};
