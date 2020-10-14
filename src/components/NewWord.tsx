import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { getSecretWord, resetState } from "../redux/actions/index";

export class NewWord extends Component<PropsFromRedux> {
    constructor(props: PropsFromRedux) {
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

//REDUX//
const mapDispatchToProps = { getSecretWord, resetState };

const connector = connect(null, mapDispatchToProps);

//TYPES//
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(NewWord);