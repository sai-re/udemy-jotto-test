import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { storeFactory, findByTestAttr } from '../test/util';

/**
* setup function to create shallow wrapper of input
* @function setup
* @param {object} initialState - Guessed word
* @returns {shallowWrapper} - 
*/
const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<App store={store} />).dive().dive();
    return wrapper;
};

it('renders main app', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-app");
    expect(component.length).toBe(1);
});

describe("redux props", () => {
    it("has success value as prop", () => {
        const success = true;
        const wrapper = setup({ success });
        //returns react componenent, props method to get access to props
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });

    it("has secret word value as prop", () => {
        const secretWord = "party";
        const wrapper = setup({ secretWord });
        //returns react componenent, props method to get access to props
        const secretWordProp = wrapper.instance().props.secretWord;
        expect(secretWordProp).toBe(secretWord);
    });

    it("has guessedWords array as prop", () => {
        const guessedWords = [{ guessedWord: "train", letterMatchCount: 3}];
        const wrapper = setup({guessedWords});
        const guessedWordsProp = wrapper.instance().props.guessedWords;
        expect(guessedWordsProp).toBe(guessedWords);
    });

    it("has getSecretWord action creator as prop", () => {
        const wrapper = setup();
        const getSecretWordProp = wrapper.instance().props.getSecretWord;
        //check if guess Word Props is a function
        expect(getSecretWordProp).toBeInstanceOf(Function);
    });
});