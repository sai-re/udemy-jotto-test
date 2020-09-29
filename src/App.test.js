import React from 'react';
import { shallow } from 'enzyme';
import ConnectedApp, { App } from './App';

import { storeFactory, findByTestAttr } from '../test/util';

import Congrats from './components/Congrats';
import GiveUpMsg from './components/GiveUpMsg';

/**
* setup function to create shallow wrapper of input
* @function setup
* @param {object} initialState - Guessed word
* @returns {shallowWrapper} - 
*/
const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<ConnectedApp store={store} />).dive().dive();
    return wrapper;
};

it('renders main app', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-app");
    expect(component.length).toBe(1);
});

describe("redux props", () => {
    //passes prop to shallow component, get props of shallow and match against initial prop value
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

    it("has giveUp value as prop", () => {
        const giveUp = true;
        const wrapper = setup({ giveUp });
        //returns react componenent, props method to get access to props
        const giveUpProp = wrapper.instance().props.giveUp;
        expect(giveUpProp).toBe(giveUp);
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

    it("getSecretWord runs on app mount", () => {
        //jest will watch mock function to see when called and how
        const getSecretWordMock = jest.fn();

        //props to give to shallow
        const props = {
            getSecretWord: getSecretWordMock,
            success: false,
            guessedWords: []
        };

        //create unconnected shallow and pass prop directly
        const wrapper = shallow(<App {...props} />);

        //run lifecycle method of actual component
        wrapper.instance().componentDidMount();

        const callCount = getSecretWordMock.mock.calls.length;
        expect(callCount).toBe(1);
    });
});

describe("congrats and failed messages", () => {
    const defaultProps = {
        guessedWords: [{
            guessedWord: "train",
            letterMatchCount: 3
        }]
    };

    //function to load render shallow component 
    const unconnectedApp = (props={}) => {
        //if component has props, overwrite default props
        const setUpProps = {...defaultProps, ...props};
        return shallow(<App {...setUpProps} />);
    };

    it('renders no congrats message when success prop is false', () => {
        const props = { success: false };

        const wrapper = unconnectedApp({...props});

        //expect element to be empty as props if false
        expect(wrapper.containsMatchingElement(<Congrats />)).toEqual(false);
    });

    it('renders congrats message when success prop is true', () => {
        const props = { success: true };

        const wrapper = unconnectedApp({...props});

        //expect element to be empty as props if false
        expect(wrapper.containsMatchingElement(<Congrats />)).toEqual(true);
    });

    it('renders message when giveUp prop is true', () => {
        const props = { giveUp: true };

        const wrapper = unconnectedApp({...props});

        //expect element to be empty as props if false
        expect(wrapper.containsMatchingElement(<GiveUpMsg />)).toEqual(true);
    });
});

