import React from 'react';
import { shallow } from 'enzyme';
import ConnectedGiveUpBtn, { GiveUpBtn } from '../GiveUpBtn';

import { findByTestAttr, storeFactory } from '../../../test/util';

describe("unconnected component tests", () => {
    /**
    * setup function to create shallow wrapper
    * @function setup
    * @param {object} props - props to overwrite default props if same name
    * @returns {shallowWrapper} - shallow wrapper 
    */
    const defaultProps = { giveUp: false };
    const setup = (props={}) => {
        const setUpProps = {...defaultProps, ...props};
        return shallow(<GiveUpBtn {...setUpProps} />);
    };

    it("renders button when giveup prop is false", () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, "give-up-button");
        expect(component.length).toBe(1);
    });
    
    it("Calls function calling givenUp action creator on click", () => {
        const mockFunction = jest.fn();
        const wrapper = shallow(<GiveUpBtn givenUp={mockFunction} />);
        const button = findByTestAttr(wrapper, "give-up-button");
        button.simulate("click", { preventDefault() {} });
    
        const callCount = mockFunction.mock.calls.length;
        expect(callCount).toBe(1);
    });

    it("has giveUp value as props", () => {
        const giveUp = true;
        const wrapper = setup({ giveUp });
        const giveUpProp = wrapper.instance().props.giveUp;
        expect(giveUpProp).toBe(giveUp);
    });
});

describe("connected component tests", () => {
    /**
    * setup function to create redux store and pass to shallow wrapper of giveUpBtn
    * @function setup
    * @param {object} initialState - empty object
    * @returns {shallowWrapper} - dived wrapper to get actual component from HOC
    */
    const setup = (initialState={}) => {
        const store = storeFactory(initialState);
        //passing in redux store as props, dive needed to access input 
        const wrapper = shallow(<ConnectedGiveUpBtn store={store} />).dive();
        return wrapper;
    };

    it("givenUp action creator is a function prop", () => {
        const wrapper = setup();
        const givenUpProp = wrapper.instance().props.givenUp;
        //check if guess Word Props is a function
        expect(givenUpProp).toBeInstanceOf(Function);
    });
});