import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import configureStore from 'redux-mock-store';
import initialState from 'redux/reducers/employeesReducer';
import {Provider} from 'react-redux';

import HeaderTest from 'components/header/HeaderTest'
import SectionHeader from 'components/common/sectionHeader/SectionHeader';
import ConnectedEmployeesSearch, {EmployeesSearch} from 'components/home/employeesSearch/EmployeesSearch';

describe('connected components', () => {
   let store, enzymeWrapper;
   const mockStore = configureStore();
   const props = {
      setNominatedPersonId: jest.fn()
   }
   describe('>>>EmployeesSearch --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
      beforeEach(() => {
         store = mockStore(initialState);
         // should be mount instead of shallow
         enzymeWrapper = shallow(<Provider store={store}><ConnectedEmployeesSearch props={props} /></Provider>)
      });
      it('+++ render the connected(SMART) component', () => {
         expect(enzymeWrapper.find(ConnectedEmployeesSearch).length).toEqual(1)


      });
      // it('+++ check Prop matches with initialState', () => {
      //    expect(enzymeWrapper.find(EmployeesSearch).prop('employees')).toEqual(initialState.output)
      // });
   });
})