import React from 'react';
import NewWord from './NewWord';

function Congrats() {    
    return (
        <div data-test="component-congrats">
            <div className="holder">
                <div className={`alert alert-success Congrats`}>
                    <span data-test="congrats-message">Congratulations! you guessed correct word</span> 
                </div>

                <NewWord /> 
            </div>
        </div>
    );
};

export default Congrats;