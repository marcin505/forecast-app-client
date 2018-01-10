import { fromJS } from 'immutable';
import {
  LOGGIN_SUCCESS,
  LOGGIN_FAILED
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
    case LOGGIN_SUCCESS:
      return state
        .set('logged', true)
        .set('invalidEmail', false)
        .set('email', payload.email);
    case LOGGIN_FAILED:
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
