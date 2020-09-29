import React from 'react';
import PropTypes from 'prop-types';
import NewWord from './NewWord';

function GiveUpMsg(props) {    
    return (
        <div data-test="component-congrats">
            <div className="holder">
                <div className={`alert alert-danger`}>
                    <span data-test="give-up-message">
                        The secret word was "{props.secretWord}" <br/> Better Luck Next time!
                    </span> 
                </div>

                <NewWord />
            </div>
        </div>
    );
};

//give types to our props
GiveUpMsg.propTypes = {
    secretWord: PropTypes.array,
};

export default GiveUpMsg;