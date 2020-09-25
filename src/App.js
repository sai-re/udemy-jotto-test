import React, {Component} from 'react';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/Input';
import GiveUpBtn from './components/GiveUpBtn';
import GiveUpMsg from './components/GiveUpMsg';

import { connect } from 'react-redux';
import { getSecretWord } from "../src/redux/actions/index";

import './App.css';

export class App extends Component {
	componentDidMount() {
		this.props.getSecretWord();
	};

	showGiveUpBtn = () => {
		if (this.props.guessedWords.length > 0 && !this.props.success) {
			return <GiveUpBtn giveUp={this.props.giveUp} /> 
		} else {
			return "";
		}
	};

	printMsg = () => {
		if (this.props.success) {
			return <Congrats />
		} else if (this.props.giveUp) {
			return <GiveUpMsg secretWord={this.props.secretWord}/>
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

const mapStateToProps = ({ success, secretWord, guessedWords, giveUp }) => {
    return { success, secretWord, guessedWords, giveUp };
};

export default connect(mapStateToProps, { getSecretWord })(App);
