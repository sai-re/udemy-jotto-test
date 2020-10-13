import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from "../redux/actions/index";

type DispatchProp = {
    guessWord: (guessedWord: string) => void
};

type LinkStateProps = {
    success: boolean,
    giveUp: boolean
};

type State = {
    guess: string
};

type Props = DispatchProp & LinkStateProps;

export class Input extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { guess: "" };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e: React.MouseEvent) {
        e.preventDefault();

        const guess = this.state.guess;

        //if guess is not blank and true dispatch guess then reset
        if (guess && guess.length > 0) {
            this.props.guessWord(guess);
            this.setState({guess: ""});
        };
    };

    showForm = () => {
        //show form if user has not given up or won
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

const mapStateToProps = (state: LinkStateProps): LinkStateProps => ({
    success: state.success, 
    giveUp: state.giveUp 
});

export default connect(mapStateToProps, { guessWord })(Input);