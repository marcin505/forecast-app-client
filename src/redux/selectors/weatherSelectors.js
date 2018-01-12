import { createSelector } from 'reselect';

const getWeatherRoot = state => (state.weather);

/* Checks whether user is logged into application */

export const getWeather = createSelector(
  getWeatherRoot,
    root => (root.get('weather'))
);

