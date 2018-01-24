import { fromJS } from 'immutable';
import {
    CITY_SEARCH,
    CITY_SEARCH_SUCCESS,
    CITY_SEARCH_FAILED,
    RESET_CITIES,
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
                .set('cities', fromJS(payload.cities))
                .set('failed', false)
                .set('loading', false);
        case CITY_SEARCH_FAILED:
            return initialState
                .set('failed', true)
                .set('loading', false);
        case RESET_CITIES:
            return initialState;
        default: {
            return state;
        }
    }
};
