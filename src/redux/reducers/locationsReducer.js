import { fromJS } from 'immutable';
import {
    CITY_SEARCH,
    CITY_SEARCH_SUCCESS,
    CITY_SEARCH_FAILED,
} from 'redux/actions/actionTypes';

export const initialState = fromJS({
    loading: false,
    failed: false,
    cities: fromJS([]),
});

export default function locationsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case CITY_SEARCH:
        return state
            .set('loading', true);
        case CITY_SEARCH_SUCCESS:
            return state
            .set('cities', payload.cities);
       case CITY_SEARCH_FAILED:
           return state
            .set('failed', true);
        default: {
            return state;
        }
    }
};
