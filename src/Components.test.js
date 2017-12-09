import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
import HeaderTest from 'components/header/HeaderTest';
import SectionHeader from 'components/common/sectionHeader/SectionHeader';

describe('components', () => {
   let enzymeWrapper;
   describe('>>>HeaderTest --- Shallow Render HeaderTest', () => {
      const props = {
         addTodo: jest.fn()
      }
      beforeEach(() => {
         enzymeWrapper = shallow(<HeaderTest {...props}/>)
      });
      it('should render self and subcomponents', () => {
         expect(enzymeWrapper.length).toEqual(1);
         expect(enzymeWrapper.find('header').hasClass('header')).toBe(true);
         const todoInputProps = enzymeWrapper.find('TodoTextInput').props();
         expect(todoInputProps.placeholder).toEqual('What needs to be done?');
      });
      it('should call addTodo if length of text is greater than 0', () => {
         const input = enzymeWrapper.find('TodoTextInput');
         input.props().onSave('')
         expect(props.addTodo.mock.calls.length).toBe(0);
         input.props().onSave('Use Redux')
         expect(props.addTodo.mock.calls.length).toBe(1);
      });
   });
   describe('>>>SectionHeader --- Shallow Render HeaderTest', () => {
      const props = {
         closeAction: jest.fn(),
         heading: 'someHeading',
      }
      beforeEach(() => {
         enzymeWrapper = shallow(<SectionHeader {...props}/>)
      });
      it('should render self and subcomponents', () => {
         expect(enzymeWrapper.length).toEqual(1);
         expect(enzymeWrapper.find('CloseContainer').hasClass('closeContainer')).toBe(true);
      });
      it('should call closeAction', () => {
         const CloseContainer = enzymeWrapper.find('CloseContainer');
         CloseContainer.props().closeAction();
         expect(props.closeAction.mock.calls.length).toBe(1);
      });
   });
   describe('>>>SectionHeader --- Snapshot',()=>{
      const props = {
         closeAction: jest.fn(),
         heading: 'someHeading',
      }
      it('+++capturing Snapshot of Home', () => {
         const renderedValue =  renderer.create(<SectionHeader {...props}/>).toJSON()
         expect(renderedValue).toMatchSnapshot();
      });
   });
})