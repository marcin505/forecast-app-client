import {
  CITY_SEARCH,
  CITY_SEARCH_SUCCESS,
  CITY_SEARCH_FAILED,
} from 'redux/actions/actionTypes';

export const citySearch = ({ query }) => {
   console.log('actions:', query);
   return ({
      type: CITY_SEARCH,
      payload: {
         query,
      },
   });
}
  
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
