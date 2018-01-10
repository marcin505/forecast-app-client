import { fromJS } from 'immutable';
import {
  LOGGIN_SUCCESS,
  LOGGIN_FAILED,
  LOGOUT,
} from 'redux/actions/actionTypes';

const getToken = () => (localStorage.getItem('token') || '');

export const initialState = fromJS({
  isLogged: false,
  accessDenied: false,
  email: '',
  _id: null,
  token: '',
});

export default function authReducer(state = initialState, { type,  payload }) {
  switch (type) {
    case LOGGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return state
        .set('isLogged', true)
        .set('accessDenied', false)
        .set('email', payload.email)
        .set('token', payload.token)
        .set('_id', payload._id);
    case LOGGIN_FAILED:
      return state
        .set('isLogged', false)
        .set('accessDenied', true)
        .set('email', '')
        .set('token', getToken());
    case LOGOUT:
      return initialState;         
    default:
    {
      return state;
    }
  }
};

