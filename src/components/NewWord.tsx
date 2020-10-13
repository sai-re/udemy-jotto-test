import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSecretWord, resetState } from "../redux/actions/index";

type Props = {
    getSecretWord: () => void, 
    resetState: () => void
};

export class NewWord extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick = () => {
        //reset redux state and request new word if user wants to play again
        this.props.resetState();
        this.props.getSecretWord();
    };

    render() {
        return (
            <div data-test="component-new-word">
                <button 
                    className="btn btn-secondary mb-2" 
                    onClick={this.handleClick}
                    data-test="new-word-button">
                    Play Again?
                </button>
            </div>
        );
    };
};

export default connect(null, { getSecretWord, resetState })(NewWord);