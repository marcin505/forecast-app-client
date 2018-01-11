import { fromJS } from 'immutable';
import { monthsArray } from 'components/common/utils/functionUtils.js';
import {
    CITY_SEARCH,
    CITY_SEARCH_SUCCESS,
    CITY_SEARCH_FAILED,
} from 'redux/actions/actionTypes';

export const initialState = fromJS({
    loading: false,
    cities: fromJS([]),
});

export default function weatherReducer(state = initialState, { type, payload }) {
    switch (type) {
        case CITY_SEARCH:
        return state
            .set('loading', true);
        case CITY_SEARCH_SUCCESS:
            return state
            .set('cities', payload.cities);
        case CITY_SEARCH_FAILED:
        default: {
            return state;
        }
    }
};
