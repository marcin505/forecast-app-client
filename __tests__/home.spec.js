import React from 'react';
import ReactTestRenderer, { shallow } from 'react-test-renderer';
// import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { initialState } from '../src/redux/reducers/locationsReducer';
// import renderer from 'react-test-renderer'
import { Home } from '../src/components/home/Home';
import  Modal  from '../src/components/common/modal/Modal';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('>>>H O M E --- Shallow Render REACT COMPONENTS', () => {
    let wrapper;
    const initialState = {
        weather: fromJS({}),
        locations: fromJS({}),
    };
    // const initialState2 = {
    //     message: '',
    //     onClick: () => {},
    // };
   
    // beforeEach(() => {
    //     wrapper = shallow(<Modal {...initialState2} />)
    //     // console.log('wrapper: ', wrapper);
    //     // console.log('shalow: ', shallow);
    // });
    
    // it('+++ render the DUMB component', () => {
    //     // wrapper = shallow(<Home {...initialState} />)        
    //     // wrapper = shallow(<Home {...initialState} />)        
    //     // console.log(30, wrapper);                
    //     expect(wrapper.length).toEqual(1);
    //  });


    test('CheckboxWithLabel changes the text after click', () => {
        // Render a checkbox with label in the document
        const wrapper = shallow(<Home {...initialState}/>);
        expect(wrapper.length).toEqual(1);
      });

});
