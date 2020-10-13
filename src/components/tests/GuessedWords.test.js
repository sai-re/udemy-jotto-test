import React from 'react';
import { shallow } from 'enzyme';
import GuessedWords from '../GuessedWords';

import { findByTestAttr } from '../../../test/util';

/**
* setup function to create shallow wrapper
* @function setup
* @param {object} props - props to overwrite default props if same name
* @returns {shallowWrapper} - shallow wrapper 
*/
const defaultProps = { guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }] };
const setup = (props={}) => {
    const setUpProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setUpProps} />);
};

// it('props are correct type on congrats component', () => {
//     checkProps(GuessedWords, defaultProps)
// });

describe("if there are no words guessed", () => {
    let wrapper; //give wrapper to global scope of describe

    //runs before each test
    beforeEach(() => wrapper = setup({ guessedWords: [] }));

    it('renders without errors', () => {
        const component = findByTestAttr(wrapper, "component-guessed-words");
        //expect section to be rendered
        expect(component.length).toBe(1);
    });

    it('renders instructions', () => {
        const instructions = findByTestAttr(wrapper, "guess-instructions");
        //checks if instruction element has text
        expect(instructions.text().length).not.toBe(0);
    });
});

describe("if there are words guessed", () => {
    let wrapper; //give wrapper to global scope of describe

    //props for testing 
    const guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'party', letterMatchCount: 5},
        {guessedWord: 'poop', letterMatchCount: 1}
    ];

    //runs before each test
    beforeEach(() => wrapper = setup({ guessedWords }));

    it('renders without errors', () => {
        const component = findByTestAttr(wrapper, "component-guessed-words");
        expect(component.length).toBe(1);
    });

    it('renders guessed words section', () => {
        const guessedWordsDiv = findByTestAttr(wrapper, "guessed-words");
        expect(guessedWordsDiv.length).toBe(1);
    });

    it('renders correct number of guessed words', () => {
        const guessedWordsItems = findByTestAttr(wrapper, "guessed-item");
        expect(guessedWordsItems.length).toBe(guessedWords.length);
    });
});