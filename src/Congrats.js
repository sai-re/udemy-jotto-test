import React from 'react';
import PropTypes from 'prop-types';

function Congrats(props) {
    return (
        <div data-test="component-congrats" className="Congrats">
            { props.success 
                ? <span data-test="congrats-message">Congratulations! you guessed correct word</span> 
                : ""
            }
        </div>
    )
}

//give types to our props
Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats;