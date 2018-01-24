import React from 'react';
import { shalow, mount } from 'enzyme';
import { fromJS } from 'immutable';
import locationsReducer, { initialState } from '../src/redux/reducers/locationsReducer';
import { citySearch, citySearchFailed, resetCities } from '../src/redux/actions/locationsActions';
import { CITY_SEARCH_SUCCESS } from '../src/redux/actions/actionTypes';

describe('>>>R E D U C E R --- Test locationsReducers', () => {
    it('should return the initial state', () => {
        expect(locationsReducer(undefined, {})).toEqual(initialState);
    });
    it('should handle citySearch action', () => {
        const received = locationsReducer(initialState, citySearch({ query: '' }));
        const expected = initialState.set('loading', true);
        expect(received).toEqual(expected);
    });
    it('should handle citySearchSuccess action', () => {
        const payload = { cities: [] };
        const received = locationsReducer(initialState, { type: CITY_SEARCH_SUCCESS, payload });
        const expected = initialState.set('cities', fromJS([]));
        expect(received).toEqual(expected);
    });
    it('shold handle citySearchFailed action', () => {
        const received = locationsReducer(initialState, citySearchFailed({error: 'error'}));
        const expected = initialState.set('failed', true);
        expect(received).toEqual(expected);
    })
    it('shold handle resetCities action', () => {
        const received = locationsReducer(initialState, resetCities())
        const expected = initialState;
        expect(received).toEqual(expected);
    });
});
