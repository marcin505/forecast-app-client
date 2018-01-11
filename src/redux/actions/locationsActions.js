import {
  CITY_SEARCH,
  CITY_SEARCH_SUCCESS,
  CITY_SEARCH_FAILED,
} from 'redux/actions/actionTypes';
import { CITY_SEARCH_FAILED } from './actionTypes';

export const citySearch = ({ query }) => ({
    type: CITY_SEARCH,
    payload: {
      query,
    },
  });
  
export const citySearchSuccess = ({ cities }) => ({
    type: CITY_SEARCH_SUCCESS,
    payload: {
      cities,
    },
  });
  
export const citySearchFailed = () => ({
    type: CITY_SEARCH_FAILED,
});
