import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';

import { findByTestAttr, storeFactory } from '../../../test/util';

/**
 * setup function to create shallow wrapper of input
* @function setup
* @param {object} initialState - Guessed word
* @returns {shallowWrapper} - 
*/
const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    //passing in redux store as props, dive needed to access input 
    const wrapper = shallow(<Input store={store} />).dive().dive();
    return wrapper;
};

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;

        beforeEach(() => {
            const initialState = { success: false};
            wrapper = setup(initialState);
        });

        it('renders without errors', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        it('renders input box', () => {
            const inputBox = findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(1);
        });

        it('renders submit button', () => {
            const submitBtn = findByTestAttr(wrapper, "submit-button");
            expect(submitBtn.length).toBe(1);
        });
    });

    describe('word has been guessed', () => {
        let wrapper;

        beforeEach(() => {
            const initialState = { success: true};
            wrapper = setup(initialState);
        });

        it('renders without errors', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        it('does not render input box', () => {
            const inputBox = findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(0);
        });
        
        it('does not render submit button', () => {
            const submitBtn = findByTestAttr(wrapper, "submit-button");
            expect(submitBtn.length).toBe(0);
        });
    });
});

describe('redux props', () => {
    it("has success value as props", () => {
        const success = true;
        const wrapper = setup({ success });
        //returns react componenent, props method to get access to props
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });

    it("guessWord action creator is a function prop", () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        //check if guess Word Props is a function
        expect(guessWordProp).toBeInstanceOf(Function);
    });
});

