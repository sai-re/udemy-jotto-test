import React from 'react';
import PropTypes from 'prop-types';
import NewWord from './NewWord';

function Congrats(props) {
    const printCongrats = () => {
        //conditionally assign class name
        const successAlert = props.success ? "alert-success" : "";

        if (props.success) {    
            return (
                <div className={`alert ${successAlert} Congrats`}>
                    <span data-test="congrats-message">Congratulations! you guessed correct word</span> 
                </div>
            );
        };
    };
    
    return (
        <div data-test="component-congrats">
            {printCongrats()}

            {(props.success) ? <NewWord /> : null}
        </div>
    );
};

//give types to our props
Congrats.propTypes = {
    success: PropTypes.bool.isRequired
};

export default Congrats;