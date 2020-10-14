import React from 'react';
import NewWord from './NewWord';

function GiveUpMsg(props: Props) {    
    return (
        <div data-test="component-give-up-message">
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

//TYPES//
interface Props {
    secretWord: string
};

export default GiveUpMsg;