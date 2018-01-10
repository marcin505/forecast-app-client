import {
  LOGGIN,
  LOGGIN_FAILED,
  LOGGIN_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS
} from 'redux/actions/actionTypes';

export const login = ({ email, password }) => {
  // console.log(10, email, password);
  return({
  type: LOGGIN,
  payload: {
    email,
    password
  },
})};

export const loginSuccess = ({ email, token }) => ({
  type: LOGGIN_SUCCESS,
  payload: {
    email,
    token,
  },
});

export const loginFailed = () => ({
  type: LOGGIN_FAILED,
});

export const logout = () => ({
  type: LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});