import React from 'react';
import { shallow } from 'enzyme';
import Congrats from '../Congrats';

import { findByTestAttr } from '../../../test/util';

it('renders without crashing', () => {
    const wrapper = shallow(<Congrats />);
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.length).toBe(1);
});