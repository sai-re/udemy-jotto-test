import React from 'react';
import { shallow } from 'enzyme';
import GiveUpMsg from '../GiveUpMsg';
import NewWord from '../NewWord';

import { findByTestAttr } from '../../../test/util';

it("Has secretWord prop in message", () => {
    const prop = ["party"];
    const wrapper = shallow(<GiveUpMsg secretWord={ prop } />);
    const component = findByTestAttr(wrapper, "give-up-message");

    expect(component.text()).toContain(...prop);
});

it("Renders NewWord component", () => {
    const wrapper = shallow(<GiveUpMsg />);
    expect(wrapper.containsMatchingElement(<NewWord />)).toEqual(true);
});