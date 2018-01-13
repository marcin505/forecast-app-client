import { createSelector } from 'reselect';

const getLocationsRoot = state => (state.locations);

/* Checks whether user is logged into application */

export const getLocations = createSelector(
   getLocationsRoot,
   root => root,
);



