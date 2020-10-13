import React, { Component } from 'react';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/Input';
import GiveUpBtn from './components/GiveUpBtn';
import GiveUpMsg from './components/GiveUpMsg';

import { connect } from 'react-redux';
import { getSecretWord } from "../src/redux/actions/index";

import { AppState } from './types/state';

import './App.css';

type DispatchProp = {
	getSecretWord: () => void
};

type Props = DispatchProp & AppState;

export class App extends Component<Props> {
	componentDidMount() {
		this.props.getSecretWord();
	};

	//show give up button if a unsuccessful guess has been made
	showGiveUpBtn = () => {
		if (this.props.guessedWords.length > 0 && !this.props.success) {
			return <GiveUpBtn giveUp={this.props.giveUp} /> 
		} else {
			return "";
		};
	};

	//print congrats if guess is correct otherwise check if user has given up
	printMsg = () => {
		if (this.props.success) {
			return <Congrats />
		} else if (this.props.giveUp) {
			return <GiveUpMsg secretWord={this.props.secretWord}/>
		} else {
			return;
		};
	};

	render() {		
		return (
			<div data-test="component-app" className="container">
				<div className="row">
					<div className="col-sm">
						<h1>Jotto</h1>
						<p>secret word is {this.props.secretWord}</p>
						
						{this.printMsg()}

						<div className="button-group">
							<Input />
							{this.showGiveUpBtn()}
						</div>

						<GuessedWords guessedWords={this.props.guessedWords} />
					</div>
				</div>
			</div>
		);
	};
};

const mapStateToProps = (state: AppState): AppState => ({
	success: state.success, 
	secretWord: state.secretWord,
	guessedWords: state.guessedWords,
	giveUp: state.giveUp
});

export default connect(mapStateToProps, { getSecretWord })(App);