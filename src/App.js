import React, {Component} from 'react';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/Input';

import './App.css'

class App extends Component {
	render() {
		return (
			<div className="container">
				<h1>Jotto</h1>

				<Congrats success={false} />
				
				<Input />

				<GuessedWords guessedWords={[]} />
			</div>
		);
	}
}

export default App;
