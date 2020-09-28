import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from "../redux/actions/index";

export class Input extends Component {
    constructor() {
        super();

        this.state = {
            guess: ""
        };

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {
        e.preventDefault();

        const guess = this.state.guess;
        
        if (guess && guess.length > 0) {
            this.props.guessWord(guess);
            this.setState({guess: ""});
        };
    };

    showForm = () => {
        if (this.props.success || this.props.giveUp ) {
            return null;
        } else {
            return (
                <form className="form-inline">
                    <input 
                        data-test="input-box" 
                        className="mb-2 mx-sm-3" 
                        placeholder="Enter Guess"
                        onChange={(e) => this.setState({guess: e.target.value})}
                        value={this.state.guess}
                    />
                    
                    <button 
                        data-test="submit-button" 
                        type="submit" 
                        className="btn btn-primary mb-2"
                        onClick={(e) => this.handleClick(e)}>
                        Submit
                    </button>
                </form>
            );
        };
    };

    render() {
        return (
            <div data-test="component-input">
                {this.showForm()}
            </div>
        );
    };
};

const mapStateToProps = ({ success, giveUp }) => {
    return { success, giveUp }
};

export default connect(mapStateToProps, { guessWord })(Input);