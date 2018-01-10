import {
  LOGGIN,
  LOGGIN_FAILED,
  LOGGIN_SUCCESS,
  LOGOUT,
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

export const loginSuccess = ({ email, token, _id }) => ({
  type: LOGGIN_SUCCESS,
  payload: {
    email,
    token,
    _id,
  },
});

export const loginFailed = () => ({
  type: LOGGIN_FAILED,
});

export const logout = () => ({
  type: LOGOUT,
});

