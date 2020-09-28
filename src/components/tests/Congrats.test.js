import React from 'react';
import {shallow} from 'enzyme';
import Congrats from '../Congrats';

import {findByTestAttr, checkProps} from '../../../test/util';

///////
const defaultProps = {success: false};
//function to load render shallow component 
const setup = (props={}) => {
    //if component has props, overwrite default props
    const setUpProps = {...defaultProps, ...props};
    return shallow(<Congrats {...setUpProps} />);
};
///////

it('renders without crashing', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.length).toBe(1);
});