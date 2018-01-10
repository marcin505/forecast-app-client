import {
  LOGGIN,
  LOGGIN_FAILED,
  LOGGIN_SUCCESS,
} from 'redux/actions/actionTypes';

export const login = ({ email }) => ({
  type: LOGGIN,
  payload: {
    email,
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
