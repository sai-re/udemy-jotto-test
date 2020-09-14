import React, {Component} from 'react';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';

import './App.css'

class App extends Component {
	render() {
		return (
			<div className="container">
				<h1>Jotto</h1>

				<Congrats success={false} />
				
				<GuessedWords guessedWords={[
					{guessedWord: 'train', letterMatchCount: 3},
					{guessedWord: 'agile', letterMatchCount: 1},
					{guessedWord: 'party', letterMatchCount: 5}
				]} />
			</div>
		);
	}
}

export default App;
