import { createSelector } from 'reselect';

const getWeatherRoot = state => (state.weather);

/* Checks whether user is logged into application */

export const getWeather = createSelector(
  getWeatherRoot,
    root => (root.get('weather'))
);

export const getNominatedPersonId = createSelector(
  getWeatherRoot,
    root => (root.get('nominatedPersonId')
  )
);

export const getNominationAdded = createSelector(
  getWeatherRoot,
    root => (root.get('nominationAdded')
 )
);

export const getVotingMonth = createSelector(
  getWeatherRoot,
    root => (root.get('votingMonth'))
);

export const getWeatherReducer = createSelector(
  getWeatherRoot,
    root => (root)
);
