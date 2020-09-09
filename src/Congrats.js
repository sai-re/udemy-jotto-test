import React from 'react';
import PropTypes from 'prop-types';

function Congrats(props) {
    const successAlert = props.success ? "alert-success" : "";
    
    return (
        <div data-test="component-congrats" className={`alert ${successAlert} Congrats`}>
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