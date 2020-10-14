import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { guessWord } from "../redux/actions/index";

export class Input extends Component<PropsFromRedux, OwnState> {
    constructor(props: PropsFromRedux) {
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

//REDUX//
const mapStateToProps = (state: MapStateProps): MapStateProps => ({
    success: state.success, 
    giveUp: state.giveUp 
});

const mapDispatchToProps = { guessWord };

//seperate connect function calls
const connector = connect(mapStateToProps, mapDispatchToProps);

//TYPES//
//types for redux state as props
interface MapStateProps {
    success: boolean,
    giveUp: boolean
};

//types for local state
interface OwnState {
    guess: string
};

//infer props from redux using connectedProps
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Input);