import { takeEvery, delay, takeLatest, fork } from 'redux-saga'
import { expectSaga } from 'redux-saga-test-plan';
import { call, put, take } from 'redux-saga/effects'
import * as LocationsActions from '../src/redux/actions/locationsActions';
import locationsSagas, { citySearchSaga } from '../src/redux/sagas/locationsSaga';
import { CITY_SEARCH, CITY_SEARCH_FAILED } from '../src/redux/actions/actionTypes';
import * as matchers from 'redux-saga-test-plan/matchers';
import { citySearchRequest } from '../src/api/locationsAPI';
import assert from 'assert';
import { citySearchFailed } from '../src/redux/actions/locationsActions';
import { citySearch } from '../src/routes/routesDefinitions';

//*******************************************************************************************************//

describe('>>>> test locationsSagas', () => {
    it('should have the expected watchers', done => {
        expectSaga(locationsSagas)
            .run({ silenceTimeout: true })
            .then(saga => {
                expect(saga).toMatchSnapshot();
                done();
            });
    });
    it('should put a CITY_SEARCH_SUCCESS', () => expectSaga(citySearchSaga, { payload: { query: '' } })
        .provide([
            // Use the `call.fn` matcher from Redux Saga Test Plan
            [matchers.call.fn(citySearchRequest), [{ city: 'Oslo' }]],
        ])
        .put({
            type: 'CITY_SEARCH_SUCCESS',
            payload: { cities: [{ city: 'Oslo' }] },
        })
        .run()
    );
    it('should throw an error on locationsSaga', () => {
        const generator = citySearchSaga(LocationsActions.citySearch({ query: 'Oslo' }));
        const error = new Error('Failed to fetch cities');
        assert.deepEqual(
            generator.next().value,
            call(citySearchRequest, 'Oslo'),
            'waiting for fetch response'
        )
        assert.deepEqual(
            generator.throw(error).value,
            put({ type: 'CITY_SEARCH_FAILED', payload: { error } }),
            'putting failure action'
        )
    });
});


// assert.deepEqual(iterator.throw('error').value, put(actions.checkoutFailure('error')))