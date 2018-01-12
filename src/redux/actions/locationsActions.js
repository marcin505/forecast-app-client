import {
  CITY_SEARCH,
  CITY_SEARCH_SUCCESS,
  CITY_SEARCH_FAILED,
  RESET_CITIES,
} from 'redux/actions/actionTypes';

export const citySearch = ({query}) => ({
   type: CITY_SEARCH,
   payload: {
      query,
   },
});

  
export const citySearchSuccess = ({cities}) => {
  return ({
    type: CITY_SEARCH_SUCCESS,
    payload: {
      cities,
    },
  })
};
  
export const citySearchFailed = () => ({
    type: CITY_SEARCH_FAILED,
});

export const resetCities = () => ({
   type: RESET_CITIES,
})
