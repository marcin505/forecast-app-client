import React from 'react';
import {shalow, mount } from 'enzyme';
import {fromJS} from 'immutable';
import locationsReducer, {initialState} from '../src/redux/reducers/locationsReducer';  
import { citySearch } from '../src/redux/actions/locationsActions';
import {CITY_SEARCH} from '../src/redux/actions/actionTypes'

describe('>>>R E D U C E R --- Test locationsReducers', ()=>{
    it('should return the initial state', () => {
        expect(locationsReducer(undefined, {})).toEqual(initialState);
    });
});