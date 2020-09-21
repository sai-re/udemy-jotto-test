import React, {Component} from 'react';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/Input';

import { connect } from 'react-redux';
import { getSecretWord } from "../src/redux/actions/index";

import './App.css';

export class App extends Component {

	componentDidMount() {
		this.props.getSecretWord();
	};

	render() {
		return (
			<div data-test="component-app" className="container">
				<div className="row">
					<div className="col-sm">
						<h1>Jotto</h1>

						<Congrats success={this.props.success} />
						
						<Input secretWord={this.props.secretWord} />

						<GuessedWords guessedWords={this.props.guessedWords} />
					</div>
				</div>
			</div>
		);
	};
};

const mapStateToProps = ({ success, secretWord, guessedWords }) => {
    return { success, secretWord, guessedWords };
};

export default connect(mapStateToProps, { getSecretWord })(App);
