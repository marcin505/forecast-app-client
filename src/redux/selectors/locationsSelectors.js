import { createSelector } from 'reselect';

const getLocationsRoot = state => (state.locations);

/* Checks whether user is logged into application */

export const getCities = createSelector(
   getLocationsRoot,
   root => root.get('cities'),
);



