import React from 'react';

type Props = {
    guessedWords: any[]
};

function GuessedWords(props: Props) {
    const printTable = () => {
        //if there are no guessed words print msg
        if (props.guessedWords.length === 0) {
            return <span data-test="guess-instructions">Try to guess the secret word!</span>
        } else {
            //map over guessed words and print table with word and letter match count
            const guessedWordsRow = props.guessedWords.map((word, index) => (
                <tr data-test="guessed-item" key={index}>
                    <td>{index + 1}</td>
                    <td>{word.guessedWord}</td>
                    <td>{word.letterMatchCount}</td>
                </tr>
            ));
            
            //return table component if props has guessed words
            return (
                <div data-test="guessed-words">
                    <h3>Guessed Words</h3>
    
                    <table className="table table-sm">
                        <thead className="thead-light">
                            <tr>
                                <th>#</th>
                                <th>Guess</th>
                                <th>Matching Letters</th>
                            </tr>
                        </thead>
    
                        <tbody>
                            {guessedWordsRow}
                        </tbody>
                    </table>

                    <strong><p>Total Guesses: {props.guessedWords.length}</p></strong>
                </div>
            );
        };
    };

    return (
        <div data-test="component-guessed-words" className="GuessedWords">
            {printTable()}
        </div>
    );
};

export default GuessedWords;