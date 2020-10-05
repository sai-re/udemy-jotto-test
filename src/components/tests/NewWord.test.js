import React from 'react';
import { shallow } from 'enzyme';
import ConnectedNewWord, { NewWord } from '../NewWord';

import { storeFactory, findByTestAttr } from '../../../test/util';

/**
* setup function to create shallow wrapper of input
* @function setup
* @param {object} initialState - empty object
* @returns {shallowWrapper} - dived wrapper to get actual component from HOC
*/
const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    //passing in redux store as props, dive needed to access input 
    const wrapper = shallow(<ConnectedNewWord store={store} />).dive();
    return wrapper;
};

it("Calls handler function on click", () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<NewWord getSecretWord={mockFunction} resetState={mockFunction} />);
    const button = findByTestAttr(wrapper, "new-word-button");
    button.simulate('click');
    expect(mockFunction.mock.calls.length).toBe(2);
});

it("Has resetState props from redux", () => {
    const wrapper = setup();
    expect(wrapper.instance().props.resetState).toBeInstanceOf(Function);
});

it("Has getSecretWord props from redux", () => {
    const wrapper = setup();
    expect(wrapper.instance().props.getSecretWord).toBeInstanceOf(Function);
});