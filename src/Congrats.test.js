import React from 'react';
import {shallow} from 'enzyme';
import Congrats from './Congrats';

import {findByTestAttr, checkProps} from '../test/util';

///////
const defaultProps = {success: false};

const setup = (props={}) => {
    const setUpProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setUpProps} />);
}
///////

it('renders without crashing', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.length).toBe(1);
});

it('renders no text when success prop is false', () => {
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.text()).toBe('');
});

it('renders non-empty congrats message when success prop is true', () => {
    const wrapper = setup({success: true});
    const message = findByTestAttr(wrapper, "congrats-message");
    expect(message.text().length).not.toBe(0);
});

it('props are correct type on congrats component', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps)
})