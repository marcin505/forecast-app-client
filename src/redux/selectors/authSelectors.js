import { createSelector } from 'reselect';

const getAuthRoot = state => (state.auth);

export const getAuth = createSelector(
  getAuthRoot,
    root => root
);