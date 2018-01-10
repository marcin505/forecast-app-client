import {
  LOGGIN,
  LOGGIN_FAILED,
  LOGGIN_SUCCESS,
} from 'redux/actions/actionTypes';

export const login = ({ email, password }) => ({
  type: LOGGIN,
  payload: {
    email,
    password
  },
});

export const loginSuccess = ({ email }) => ({
  type: LOGGIN_SUCCESS,
  payload: {
    email,
  },
});

export const loginFailed = () => ({
  type: LOGGIN_FAILED,
});
