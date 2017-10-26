import { createSelector } from 'reselect';

const getAuthRoot = state => (state.auth);

/* Checks whether user is logged into application */

export const isUserLogged = createSelector(
  getAuthRoot,
    root => {
      return (root.get('logged'))
    }
);

