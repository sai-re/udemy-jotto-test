import React from 'react';

function Congrats(props) {
    return (
        <div data-test="component-congrats" className="Congrats">
            {props.success ? <span data-test="congrats-message">Congratulations! you guessed correct word</span> : ""}
        </div>
    )
}

export default Congrats;