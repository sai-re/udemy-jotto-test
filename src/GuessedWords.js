import React from 'react';
import PropTypes from 'prop-types';

function GuessedWords(props) {
    let contents;

    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">Try to guess the secret word!</span>
        )
    } else {
        const guessedWordsRow = props.guessedWords.map((word, index) => (
            <tr data-test="guessed-item" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ));

        contents = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>

                    <tbody>
                        {guessedWordsRow}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div data-test="component-guessed-words" className="GuessedWords">
            {contents}
        </div>
    )
}

//give types to our props
GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}

export default GuessedWords;