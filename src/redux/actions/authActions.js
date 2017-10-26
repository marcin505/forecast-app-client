import {
  LOGGING_BY_EMAIL,
  LOGGING_BY_EMAIL_FAILED,
  LOGGING_BY_EMAIL_SUCCESS,
} from 'redux/actions/actionTypes';

export const loginByEmail = ({ email }) => ({
  type: LOGGING_BY_EMAIL,
  payload: {
    email,
  },
});

export const loginByEmailSuccess = ({ email }) => ({
  type: LOGGING_BY_EMAIL_SUCCESS,
  payload: {
    email,
  },
});

export const loginByEmailFailed = () => ({
  type: LOGGING_BY_EMAIL_FAILED,
});
