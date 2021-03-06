import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, expectedProps) => {
    //get error message by using check prop type func to compare if expected props and component.propTypes are the same type
    const propError = checkPropTypes(component.propTypes, expectedProps, 'prop', component.name);
    //if props match error should be undefined as there is nothing wrong
    expect(propError).toBeUndefined();
}
