import React from 'react';
import ReactDOM from 'react-dom';
import employeesReducer, {initialState} from './redux/reducers/employeesReducer.js';
import { setNominationAdded } from './redux/actions/employeesActions.js';
import App from './components/App';
import { sum, selectImage, fetchData, failFetchData } from './components/common/utils/testFunctions.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('adds 1 + 2 to equal 3', () => {
   // expect(sum(1, 2)).toBe(3);
   expect(sum(1, 2)).toEqual(3);
});

// toEqual is for objedts
test('object assignment', () => {
   const data = {one:1};
   data['two'] = 2;
   expect(data).toEqual({one: 1, two:2});
});

test('adding positive numbers is not zero', () => {
   for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
         expect(a + b).not.toBe(0);
      }
   }
});

test('emptyString', () => {
   const f = '';
   expect(f).toBeFalsy();
});

describe("testing actions", function() {
   it("testing selectImage", () => {
      const image = '1.jpg';
      const output = selectImage({ image });
      const payload =  { image };
      expect(output).toEqual({type: 'IMAGE_SELECTED', payload});
   });
});

test('the data is peanut butter', () => {
   expect.assertions(1);
   return expect(fetchData()).resolves.toBe('peanut butter');
   // return fetchData().then(data => {
   //    expect(data).toBe('peanut butter');
   // });
});


test('the fetch fails with an error', () => {
   expect.assertions(1);
   return expect(failFetchData()).rejects.toMatch('error leci');
   // return failFetchData().catch(e =>
   //    expect(e).toMatch('error leci')
   // );
});

describe('testing employeesReducer', () => {
   it('should handle initial state', () => {
      expect(
         employeesReducer(undefined, {})
      ).toEqual(initialState)
   })
   it('should handle SET_NOMINATED_PERSON_ID', () => {
      expect(
         employeesReducer(initialState, setNominationAdded({nominationAdded : true})) //received
      ).toEqual(initialState.set('nominationAdded', true)) //expected
   })
});

