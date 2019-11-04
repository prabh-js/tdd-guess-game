import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from './test/testUtils';
import Input from './Input';
import { storeFactory } from './test/testUtils';
import { init } from 'events';
Enzyme.configure({
    adapter: new EnzymeAdapter()
})

const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />).dive().dive();
    return wrapper;
}
describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        })
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        })
        test('renders the input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(1);
        })
        test('renders the submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(1);
        })
    })
   describe('word has been guessed', () => {
       let wrapper;
       beforeEach(() => {
           const initialState = { success: true };
           wrapper = setup(initialState);
       })
    test('renders component without error', () => {
        const component = findByTestAttr(wrapper, 'component-input');
        expect(component.length).toBe(1);
    })
    test('does not renders the input box', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox.length).toBe(0);
    })
    test('does not renders the submit button', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(submitButton.length).toBe(0);
    })
   })
})
describe('update the state', () => {

})